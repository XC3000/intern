import React, { useState } from "react";
import { Card, Avatar } from "antd";
import {
  ChromeOutlined,
  DeleteFilled,
  EditOutlined,
  EllipsisOutlined,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const ProfileItem = ({ profile, showModal, setProfile }) => {
  console.log(profile);

  /*   console.log("HeartFilled"); */
  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src={`https://avatars.dicebear.com/4.5/api/male/${profile.email}.svg`}
          />
        }
        actions={[
          <HeartOutlined key="like" />,
          <EditOutlined
            key="edit"
            onClick={() => {
              showModal();
              setProfile(profile);
            }}
          />,
          <DeleteFilled key="delete" />,
        ]}
      >
        <Meta title={profile.name} />
        <div>
          <MailOutlined /> {profile.email}
        </div>
        <div>
          <PhoneOutlined /> {profile.phone}
        </div>
        <div>
          <ChromeOutlined /> {profile.website}
        </div>
      </Card>
    </>
  );
};

export default ProfileItem;
