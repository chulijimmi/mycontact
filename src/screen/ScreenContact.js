import React from 'react';
import {FlatList} from 'react-native';
import SafeAreaViewContact from '../component/SafeAreaViewContact';
import ContactItem from '../component/ContactItem';
import {useDispatch, useSelector} from 'react-redux';
import RepoNetContact from '../repository/network/RepoNetContact';
import {setContactData} from '../reducers/contactSlice';

function ScreenContact({navigation}) {
  const data = useSelector(state => state.contact.data);
  const selectedId = useSelector(state => state.contact.selectedId);
  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    return <ContactItem item={item} onPress={() => navigation.navigate('DetailContact', {
      contactId: 'Test',
      name: 'Test',
    })}/>;
  };

  React.useEffect(() => {
    const getContacts = async () => {
      const response = await RepoNetContact.get();
      dispatch(setContactData(response.data));
      return response;
    };

    getContacts();
  }, []);

  return (
    <SafeAreaViewContact>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaViewContact>
  );
}

export default ScreenContact;
