import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { createUser, deleteUser, updateUser } from '@/lib/actions/user.actions';
import { clerkClient } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { svix_id, svix_timestamp, svix_signature } = headers(req);
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET || !svix_id || !svix_timestamp || !svix_signature) {
      return new Response('Error occurred -- invalid headers', {
        status: 400,
      });
    }

    const payload = await req.json();
    const body = JSON.stringify(payload);

    const wh = new Webhook(WEBHOOK_SECRET);
    const evt: WebhookEvent = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;

    const handleUserCreated = async () => {
      const { id, email_addresses, image_url, first_name, last_name, username } = evt.data;

      const user = {
        clerkId: id,
        email: email_addresses[0].email_address,
        username: username!,
        firstName: first_name,
        lastName: last_name,
        photo: image_url,
      };

      const newUser = await createUser(user);

      if (newUser) {
        await clerkClient.users.updateUserMetadata(id, {
          publicMetadata: {
            userId: newUser._id,
          },
        });
      }

      return NextResponse.json({ message: 'OK', user: newUser });
    };

    const handleUserUpdated = async () => {
      const { id, image_url, first_name, last_name, username } = evt.data;

      const user = {
        firstName: first_name,
        lastName: last_name,
        username: username!,
        photo: image_url,
      };

      const updatedUser = await updateUser(id, user);

      return NextResponse.json({ message: 'OK', user: updatedUser });
    };

    const handleUserDeleted = async () => {
      const { id } = evt.data;
      const deletedUser = await deleteUser(id!);

      return NextResponse.json({ message: 'OK', user: deletedUser });
    };

    switch (evt.type) {
      case 'user.created':
        return await handleUserCreated();
      case 'user.updated':
        return await handleUserUpdated();
      case 'user.deleted':
        return await handleUserDeleted();
      default:
        return new Response('Event type not supported', { status: 400 });
    }
  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
