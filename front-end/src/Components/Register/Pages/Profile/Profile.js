import React, { useEffect, useLayoutEffect, useState } from "react";
import PageMenu from "../../Component/PageMenu/PageMenu";
import UseRedirectLogOutUser from "../../Component/customHook/UseRedirectLogOutUser";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  selectUser,
  updateUser,
} from "../../Redux/Features/Auth/authSlice";
import defaultAvatar from "../../../../Asset/tartar.webp";
import "./Profile.css";
import { toast } from "react-toastify";
import Notification from "../../Component/Notification/Notification";

const cloud_name = process.env.REACT_APP_CLOUD_NAME;
const upload_preset = process.env.REACT_APP_UPLOAD_PRESET;

export const shortenText = (text, numOfCharc) => {
  if (text.length > numOfCharc) {
     const shortenedText = text.substring(0, numOfCharc).concat("...");

    return shortenedText;
  }
  return text;
};

const Profile = () => {
  UseRedirectLogOutUser("/login");
  const dispatch = useDispatch();
  const {user } = useSelector(
    (state) => state.auth
  );

  const initialState = {
    name: user?.name || "",
    email: user?.email || "",
    bio: user?.bio || "",
    phoneNumber: user?.phoneNumber || "",
    photo: user?.photo || "",
    role: user?.role || "",
    isVerified: user?.isVerified || false,
  };

  const [profile, setProfile] = useState(initialState);
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setimagePreview] = useState(null);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setimagePreview(URL.createObjectURL(e.target.files[0]));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const saveProfile = async (e) => {
    e.preventDefault();

    let imageUrl;

    try {
      if (
        profileImage !== null &&
        (profileImage.type === "image/jpeg" ||
          profileImage.type === "image/png" ||
          profileImage.type === "image/jpg")
      ) {
        const image = new FormData();
        image.append("file", profileImage);
        image.append("cloud_name", cloud_name);
        image.append("upload_preset", upload_preset);

        //Save image to cloudinary
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dgbse9qr1/image/upload",
          { method: "post", body: image }
        );

        const imgData = await response.json();
        console.log(imgData);
        imageUrl = imgData.url.toString();
      }
      //Save Profile to mongo DB

      const userData = {
        name: profile.name,
        phoneNumber: profile.phoneNumber,
        bio: profile.bio,
        photo: profileImage ? imageUrl : profile.photo,
      };

      dispatch(updateUser(userData));
    } catch (error) {
      toast.error(error.message);
    }
  };

  useLayoutEffect(() => {
    if (user) {
      setProfile({
        ...profile,
        name: user.name,
        eamil: user.eamil,
        phoneNumber: user.phoneNumber,
        photo: user?.photo,
        bio: user.bio,
        role: user.role,
        isVerified: user.isVerified,
      });
    }
  }, [user]);

  return (
    <>
      <section className="container">
        {!profile.isVerified && <Notification />}
        <div className="main">
          <div className="pageMenu">
            <PageMenu />
          </div>

          <div className="profile">
            <h2 className="myAcct">My Profile</h2>

            <div>
              <img
                src={
                  imagePreview === null && !user?.photo
                    ? defaultAvatar
                    : imagePreview || user?.photo
                }
              />

              <h3 className="role">Role: <span>{profile.role}</span></h3>
            </div>

            <form onSubmit={saveProfile}>
              <p className="changePhoto">
                <label>Change Photo: </label>
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={handleImageChange}
                />
              </p>
              <p className="name">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={profile?.name}
                  onChange={handleInputChange}
                />
              </p>
              <p className="email">
                <label>Email: </label>
                <input
                  type="email"
                  name="email"
                  value={profile?.email}
                  onChange={handleInputChange}
                  disabled
                />
              </p>
              <p className="num">
                <label>PhoneNumber: </label>
                <input
                  type="number"
                  name="phoneNumber"
                  value={profile?.phoneNumber}
                  onChange={handleInputChange}
                />
              </p>
              <p className="bio">
                <label>Bio: </label>
                <textarea
                  name="bio"
                  cols="30"
                  rows="10"
                  value={profile?.bio}
                  onChange={handleInputChange}
                ></textarea>
              </p>
              <p>
                <button>Update Profile</button>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export const UserName = () => {
  const user = useSelector(selectUser);

  const username = user?.name || "...";

  return <p>@{shortenText(username, 8)}</p>;
};

export default Profile;
