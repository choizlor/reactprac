import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://img.hankyung.com/photo/202207/BF.30710089.1.jpg"
          name="Bob"
          size={200}
        />
        <p>안녕하세요!</p>
      </Navbar>

      <Navbar>
        <p>안녕하세요!</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}
