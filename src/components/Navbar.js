import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-around"
            sx={{
                gap: { sm: "70px", xs: "40px" },
                mt: { sm: "32px", xs: "20px" },
                justifyContent: "none",
            }}
            px="20px"
        >

            <Stack direction="row" sx={{gap:{ sm:"40px", xs: "20px"}, fontSize:{md:"24px", sm: "20px", xs:"18px"}}}alignItems="center">
                <Link to="/">
                    <img
                        src={Logo}
                        alt="logo"
                        style={{ width: "200px", height: "auto", marginTop: "0" }}
                    />
                </Link>
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "3A1212",
                        borderBottom: "3px solid #FF2625",
                    }}
                >
                    Home
                </Link>
                <a
                    href="#exercises"
                    style={{ textDecoration: "none", color: "#3A1212", borderBottom: "3px solid #FF2625" }}
                >
                    Exercises
                </a>
               
            </Stack>
        </Stack>
    );
};

export default Navbar;
