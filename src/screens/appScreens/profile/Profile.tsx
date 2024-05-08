import AppLayout from '@components/AppLayout';

import CustomButton from '@components/buttons/CustomButton';
import { useLogoutMutation } from '@app/features/auth/auth-api-slice';
import React from 'react';
import { useTempAuth } from 'src/context/useTempAuth';
import { Text, View } from 'react-native';

const Profile = () => {
  const [logout] = useLogoutMutation();
  const { currentUser } = useTempAuth();
  const handleLogount = () => logout();

  return (
    <AppLayout>
      <Text>{currentUser?.username}</Text>
      <Text>{currentUser?.email}</Text>
      <View style={{ paddingTop: 30 }} />
      <CustomButton
        size="small"
        title="Logout"
        onPress={handleLogount}
      />
    </AppLayout>
  );
};

export default Profile;
