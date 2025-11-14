'use client'

import { useState } from 'react'

const mockUser = {
  id: 1,
  name: 'Jane Doe',
  profile: {
    settings: {
      theme: {
        colors: {
          primary: '#3498db',
          secondary: '#2ecc71',
          background: '#f0f0f0',
        },
        font: 'Arial',
      },
      notifications: {
        email: true,
        sms: false,
      },
    },
    preferences: {
      language: 'en',
      timezone: 'GMT+6',
    },
  },
}

export default function Page() {
  const [user] = useState(mockUser)
  const {
    name,
    profile: {
      settings: {
        theme: {
          colors: { primary, secondary, background },
          font,
        },
        notifications: { email, sms },
      },
      preferences: { language, timezone },
    },
  } = user
  console.log(
    'All values are',
    name,
    primary,
    secondary,
    background,
    font,
    email,
    sms,
    language,
    timezone
  )
  return (
    <div>
      <div className='p-4 max-w-md mx-auto'>
        <h1 className='text-2xl font-bold mb-4'>User Profile</h1>
        <p>
          <strong>Name:</strong> {name || 'Unknown User'}
        </p>
        <p>
          <strong>Primary Color:</strong> {primary ?? '#000000'}
        </p>
        <p>
          <strong>Secondary Color:</strong> {secondary ?? '#777777'}
        </p>
        <p>
          <strong>Background Color:</strong> {background ?? '#ffffff'}
        </p>
        <p>
          <strong>Font:</strong> {font || 'Default Font'}
        </p>
        <p>
          <strong>Email Notifications:</strong>{' '}
          {email !== undefined ? (email ? 'Enabled' : 'Disabled') : 'Unknown'}
        </p>
        <p>
          <strong>SMS Notifications:</strong>{' '}
          {sms !== undefined ? (sms ? 'Enabled' : 'Disabled') : 'Unknown'}
        </p>
        <p>
          <strong>Language:</strong> {language || 'N/A'}
        </p>
        <p>
          <strong>Timezone:</strong> {timezone || 'N/A'}
        </p>
      </div>
    </div>
  )
}
