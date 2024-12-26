import React, { useState } from "react";
import "./Main.css";
import {
  Card,
  Input,
  Flex,
  Typography,
  Button,
  Image,
  Col,
  Row,
  Carousel,
} from "antd";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const { Title } = Typography;

export default function Home() {
  const [otp, setOtp] = useState("");
  const [isOtpCorrect, setIsOtpCorrect] = useState(false);

  const onChange = (e) => {
    if (e) {
      console.log("onChange:", e);
      setOtp(e);
    } else {
      console.error("Invalid input value:", e);
    }
  };

  const handleSubmit = () => {
    const otpValue = otp;
    console.log("OTP Value:", otpValue);

    if (otpValue === "010125") {
      setIsOtpCorrect(true);
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  const sharedProps = {
    onChange,
    value: otp,
  };

  return (
    <div>
      <div
        style={{
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            minHeight: "85vh",
            alignContent: "center",
          }}
        >
          <div>
            {!isOtpCorrect ? (
              <Card
                style={{
                  backgroundColor: "#FFE3E3",
                  border: "3px solid #789DBC",
                }}
              >
                <div
                  style={{
                    position: "fixed",
                    bottom: 0,
                    right: 0,
                    zIndex: 9999,
                  }}
                >
                  <Image
                    src="./public/assets/flower1.png"
                    style={{ width: "300px", height: "300px" }}
                    preview={false}
                  />
                </div>
                <div
                  style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    zIndex: 9999,
                  }}
                >
                  <DotLottieReact
                    src="https://lottie.host/d5ab246b-8080-47f5-9862-f3af8e918a15/VzbUA0aYG1.lottie"
                    autoplay
                    loop
                    style={{ width: "300px", height: "300px" }}
                  />
                </div>
                <Flex
                  gap="middle"
                  align="center"
                  vertical
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Col>
                    <Title
                      style={{
                        color: "#789DBC",
                        marginTop: 0,
                      }}
                      level={1}
                    >
                      🔒 Please Input Password 🔒
                    </Title>
                  </Col>
                  <Input.OTP
                    mask="🔒"
                    formatter={(str) => str.toUpperCase()}
                    {...sharedProps}
                  />
                  <Button
                    style={{
                      width: "120px",
                      marginTop: "20px",
                      color: "#C9E9D2",
                      backgroundColor: "#789DBC",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                    variant="solid"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Flex>
              </Card>
            ) : (
              <Card></Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
