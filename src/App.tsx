import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Drawer, List, Avatar } from 'antd';
import * as Yup from 'yup';
import { iRootState, Dispatch } from './state/store';
import { User } from './state/users/types';
import {
  Cover,
  Wrapper,
  Logo,
  Search,
  SearchForm,
  FormItem,
} from './shared/common/styles';
import { Profile } from './features/users';

const searchFormSchema = Yup.object().shape({
  query: Yup.string()
    .min(2, 'Too Short!')
    .required('This field cannot be empty'),
});

function App() {
  const userListIds = useSelector((state: iRootState) => state.users.result);
  const userList: User[] = useSelector(
    (state: iRootState) => state.users.entities.users
  );
  const dispatch = useDispatch<Dispatch>();
  const form = useFormik({
    initialValues: {
      query: '',
    },
    validationSchema: searchFormSchema,
    onSubmit: ({ query }) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch.users.searchUserByQuery(query);
    },
  });
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<User | null>(null);

  const handleItemClick = useCallback(
    (username) => dispatch.repos.searchReposByUser(username),
    [dispatch.repos]
  );

  return (
    <Cover>
      <>
        <Wrapper>
          <Logo />
          <SearchForm layout="vertical" onSubmitCapture={form.handleSubmit}>
            <FormItem
              validateStatus={form.errors?.query && 'error'}
              help={form.errors?.query}
            >
              <Search
                name="query"
                value={form.values.query}
                onChange={form.handleChange}
                placeholder="input a github username"
                enterButton="Search"
                size="large"
                onSearch={() => form.handleSubmit()}
              />
            </FormItem>
          </SearchForm>
          {userListIds && userListIds.length > 0 && (
            <List
              itemLayout="horizontal"
              dataSource={userListIds}
              bordered
              renderItem={(id: number) => (
                <List.Item
                  onClick={() => {
                    setSelectedProfile(userList[id]);
                    setIsDrawerVisible(true);
                  }}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={userList[id].avatar_url} />}
                    title={userList[id].login}
                    description={userList[id].url}
                  />
                </List.Item>
              )}
            />
          )}
        </Wrapper>
        <Drawer
          width="90%"
          placement="right"
          closable={false}
          onClose={() => setIsDrawerVisible(false)}
          visible={isDrawerVisible}
        >
          {selectedProfile && <Profile user={selectedProfile} />}
        </Drawer>
      </>
    </Cover>
  );
}

export default App;
