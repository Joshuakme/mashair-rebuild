// Import Next & React Components
import Image from "next/image";
import React, { useState, useEffect } from "react";
// Import Styles
import classes from "./profileBody.module.css";

function ProfileBody({ user }) {
  const { name, email } = user;
  // States
  const [isEditMode, setIsEditMode] = useState(false);
  const fullname = `${name.first} ${name.last}`;

  useEffect(() => {
    // setDefaultValue();
  }, []);

  if (!user) {
    return;
  }

  //   Functions
  //   function setDefaultValue() {
  //     setName(user.name);
  //     setEmail(user.email);
  //   }

  function changeProfileMode(e) {
    e.preventDefault();

    setIsEditMode((prevMode) => !prevMode);
  }

  return (
    <section className={classes.profileBodyContainer}>
      <form>
        <div className={classes.profileImage}>
          <Image
            src={"/mashair.svg"}
            height={80}
            width={80}
            alt="Profile Image"
          />
        </div>
        <div className={classes.infoNameRow}>
          <div className={classes.nameInput}>
            <label htmlFor="firstname">First name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={name.first}
              onChange={(e) => {
                setName(e.target.value);
              }}
              disabled={!isEditMode}
            />
          </div>
          <div className={classes.nameInput}>
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={name.last}
              onChange={(e) => {
                setName(e.target.value);
              }}
              disabled={!isEditMode}
            />
          </div>
        </div>
        <div className={classes.infoRow}>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            disabled
          />
        </div>
        <div className={classes.infoRow}>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value="********"
            onChange={(e) => {}}
            disabled={!isEditMode}
          />
        </div>
        <div className={classes.infoRow}>
          <label htmlFor="">Address</label>
          <input
            type="address"
            name="address"
            id="address"
            onChange={(e) => {}}
            disabled={!isEditMode}
          />
        </div>
        <button onClick={changeProfileMode} className={classes.modeBtn}>
          {isEditMode ? "Save Changes" : "Edit Profile"}
        </button>
      </form>
    </section>
  );
}

export default ProfileBody;
