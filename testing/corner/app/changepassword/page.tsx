"use client";

import React, { useState } from 'react';
import { Card, Text, Button, PasswordInput, Space } from '@mantine/core';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if(newPassword !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    alert('Password changed successfully!');
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: '20px' }}>
      <Text align="center" weight={700} size="xl" mb={10}>Change Password</Text>
      <Text align="center" color="dimmed" size="sm" mb={30}>
        Manage your password settings
      </Text>

      <Card shadow="sm" padding="lg">
        <PasswordInput
          label="Current Password"
          placeholder="Enter current password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          mb="md"
        />
        <PasswordInput
          label="New Password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          mb="md"
        />
        <PasswordInput
          label="Confirm New Password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          mb="md"
        />
        <Space h="md" />
        <Button fullWidth variant="outline" color="blue" onClick={handleSubmit}>
          Change Password
        </Button>
      </Card>
    </div>
  );
}
