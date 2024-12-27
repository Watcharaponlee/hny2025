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
import { div } from "framer-motion/client";
import flowerImage from "/assets/flower1.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const { Title } = Typography;
const MySwal = withReactContent(Swal);

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
      MySwal.fire({
        toast: true,
        title: <strong> 🥳 รหัสผ่านถูกต้องงง ✅</strong>,
        position: "top-end",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      setIsOtpCorrect(true);
    } else {
      MySwal.fire({
        title: <strong>รหัสผ่านผิด !!</strong>,
        text: "ลองใหม่อีกรอบนะ 😉",
        icon: "error",
        confirmButtonText: "OK 😡",
        confirmButtonColor: "#23b84b",
      });
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
              <>
                <div
                  style={{
                    position: "fixed",
                    top: 50,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 9999,
                    fontSize: "90px",
                    color: "#789DBC",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    width: "100vw",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      animation: "scroll-left-to-right 10s linear infinite",
                      alignContent: "center",
                    }}
                  >
                    🤔💭🔒 รหัสอะไรน้าาา 🔒🤔💭
                  </span>
                </div>
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
                      src={flowerImage}
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
                    {/* <p
                      style={{
                        margin: 0,
                        color: "grey",
                      }}
                    >
                      🔑 <strong>Hint : </strong> Date Now 📅
                    </p> */}
                    <div>
                      <Button
                        style={{
                          width: "120px",
                          color: "#ffff",
                          backgroundColor: "#789DBC",
                          fontSize: "16px",
                          fontWeight: "bold",
                          padding: "20px",
                        }}
                        variant="solid"
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
                    </div>
                  </Flex>
                </Card>
              </>
            ) : (
              <Card
                style={{
                  backgroundColor: "#FFE3E3",
                  border: "3px solid #789DBC",
                  width: "100vh",
                  minHeight: "50vh",
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
                  <DotLottieReact
                    src="https://lottie.host/8fafa1d1-6d4a-415b-817c-56408206f224/Kj8Td77nHX.lottie"
                    autoplay
                    loop
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
                <div
                  style={{
                    position: "fixed",
                    bottom: 0,
                    left: 150,
                    zIndex: 9999,
                  }}
                >
                  <DotLottieReact
                    src="https://lottie.host/8fafa1d1-6d4a-415b-817c-56408206f224/Kj8Td77nHX.lottie"
                    autoplay
                    loop
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
                <div
                  style={{
                    position: "fixed",
                    bottom: -15,
                    right: 0,
                    zIndex: 9998,
                  }}
                >
                  <DotLottieReact
                    src="https://lottie.host/e75ce5c6-693d-48b9-a019-1e875f4b0b5d/azB9m80qNR.lottie"
                    autoplay
                    loop
                    style={{ width: "400px", height: "300px" }}
                  />
                </div>
                <div
                  style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    zIndex: 9998,
                  }}
                >
                  <DotLottieReact
                    src="https://lottie.host/0f84a1f9-b069-4545-a29d-14ee5623181a/IYb9kXZyaE.lottie"
                    autoplay
                    loop
                    style={{ width: "300px", height: "300px" }}
                  />
                </div>

                <Row
                  gap="middle"
                  align="center"
                  vertical
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Col span={24}>
                    <Title
                      style={{
                        color: "#4CAF50",
                        fontWeight: "bold",
                      }}
                      level={2}
                    >
                      <motion.h1
                        initial={{
                          opacity: 0,
                          transform: "translateY(50px)",
                        }}
                        whileInView={{
                          opacity: 1,
                          transform: "translateY(0)",
                        }}
                        transition={{ duration: 1, delay: 0 }}
                        viewport={{ once: true }}
                        style={{
                          fontSize: "40px",
                          fontWeight: "bold",
                          color: "#F0A8D0",
                          textAlign: "center",
                        }}
                      >
                        ✨🎉 HAPPY NEW YEAR 🎉✨
                      </motion.h1>
                      <div>
                        <motion.h1
                          initial={{
                            opacity: 0,
                            transform: "translateY(50px)",
                          }} // เริ่มจากตำแหน่งล่างด้วย translateY
                          whileInView={{
                            opacity: 1,
                            transform: "translateY(0)",
                          }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                          style={{
                            fontSize: "40px",
                            fontWeight: "bold",
                            color: "#F0A8D0",
                            textAlign: "center",
                          }}
                        >
                          🌺 MY LITTEL FLOWER 🌺
                        </motion.h1>
                      </div>
                    </Title>
                  </Col>
                  <Col
                    span={24}
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "18px",
                        color: "#789DBC",
                      }}
                    >
                      <motion.p
                        initial={{
                          opacity: 0,
                          transform: "translateY(50px)",
                        }} // เริ่มจากตำแหน่งล่างด้วย translateY
                        whileInView={{
                          opacity: 1,
                          transform: "translateY(0)",
                        }}
                        transition={{ duration: 1, delay: 1 }}
                        viewport={{ once: true }}
                      >
                        <strong>Happy New Year 2025 🎉✨</strong> นะคะที่รัก
                        ขอบคุณที่ยังอยู่ด้วยกันมาจนเคาท์ดาวน์ด้วยกันอีกรอบแล้วนะ{" "}
                      </motion.p>
                      <motion.p
                        initial={{
                          opacity: 0,
                          transform: "translateY(50px)",
                        }} // เริ่มจากตำแหน่งล่างด้วย translateY
                        whileInView={{
                          opacity: 1,
                          transform: "translateY(0)",
                        }}
                        transition={{ duration: 1, delay: 1.5 }}
                        viewport={{ once: true }}
                      >
                        ปี 2024 เป็นปีที่เราเจออะไรมาเยอะแยะมากเลย ทั้งเรื่องสุข
                        และเรื่องทุกข์
                      </motion.p>
                      <motion.p
                        initial={{
                          opacity: 0,
                          transform: "translateY(50px)",
                        }} // เริ่มจากตำแหน่งล่างด้วย translateY
                        whileInView={{
                          opacity: 1,
                          transform: "translateY(0)",
                        }}
                        transition={{ duration: 1, delay: 2 }}
                        viewport={{ once: true }}
                      >
                        แต่เราก็สามารถผ่านมันมาได้อีก 1 ปีแล้วนะ
                        อะไรที่มันไม่ดีในปีที่แล้วก็ทิ้งมันไว้
                      </motion.p>
                      <motion.p
                        initial={{
                          opacity: 0,
                          transform: "translateY(50px)",
                        }} // เริ่มจากตำแหน่งล่างด้วย translateY
                        whileInView={{
                          opacity: 1,
                          transform: "translateY(0)",
                        }}
                        transition={{ duration: 1, delay: 2.5 }}
                        viewport={{ once: true }}
                      >
                        แล้วมาสร้างสิ่งดีๆไปด้วยกันในปีใหม่นี้นะ
                        ขอบคุณที่คอยซัพพอร์ต และห่วงใย กันมาตลอด
                      </motion.p>
                      <motion.p
                        initial={{
                          opacity: 0,
                          transform: "translateY(50px)",
                        }} // เริ่มจากตำแหน่งล่างด้วย translateY
                        whileInView={{
                          opacity: 1,
                          transform: "translateY(0)",
                        }}
                        transition={{ duration: 1, delay: 3 }}
                        viewport={{ once: true }}
                      >
                        ขอบคุณที่ประคองกัน และกันมาจนถึงตรงนี้
                        อยากให้เธออยู่ตรงนี้ไปด้วยกันอีกนานๆเลย
                      </motion.p>
                      <motion.p
                        initial={{
                          opacity: 0,
                          transform: "translateY(50px)",
                        }} // เริ่มจากตำแหน่งล่างด้วย translateY
                        whileInView={{
                          opacity: 1,
                          transform: "translateY(0)",
                        }}
                        transition={{ duration: 1, delay: 3.5 }}
                        viewport={{ once: true }}
                      >
                        รัก และห่วงใย เธอเสมอ
                        ขอบคุณอีกครั้งที่คอยอยู่เคียงข้างกันมาตลอด
                      </motion.p>
                    </div>
                    <div
                      style={{
                        fontSize: "18px",
                        color: "#789DBC",
                        marginTop: "50px",
                        fontWeight: "bold",
                      }}
                    >
                      <motion.p
                        initial={{
                          opacity: 0,
                          transform: "translateY(50px)",
                        }} // เริ่มจากตำแหน่งล่างด้วย translateY
                        whileInView={{
                          opacity: 1,
                          transform: "translateY(0)",
                        }}
                        transition={{ duration: 1, delay: 4 }}
                        viewport={{ once: true }}
                      >
                        รักเธอเสมอ .... จาก ...เพิ่มพูน... 💖
                      </motion.p>
                    </div>
                  </Col>
                  <Col
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                    }}
                    span={24}
                  >
                    <div
                      style={{
                        width: "100%",
                        textAlign: "center",
                      }}
                    >
                      <Carousel
                        autoplay
                        style={{
                          width: "100%",
                        }}
                      >
                        <div>
                          <Image
                            width={400}
                            src="/assets/GF1.jpg"
                            preview={false}
                            className="ImgBorder"
                          />
                        </div>
                        <div>
                          <Image
                            width={300}
                            src="/assets/GF2.JPEG"
                            preview={false}
                            className="ImgBorder"
                          />
                        </div>
                        <div>
                          <Image
                            width={300}
                            src="/assets/GF3.JPEG"
                            preview={false}
                            className="ImgBorder"
                          />
                        </div>
                        <div>
                          <Image
                            width={300}
                            src="/assets/GF4.JPEG"
                            preview={false}
                            className="ImgBorder"
                          />
                        </div>
                        <div>
                          <Image
                            width={400}
                            src="/assets/GF5.JPEG"
                            preview={false}
                            className="ImgBorder"
                          />
                        </div>
                        <div>
                          <Image
                            width={400}
                            src="/assets/GF6.JPEG"
                            preview={false}
                            className="ImgBorder"
                          />
                        </div>
                        {/* <div>
                            <Image
                              width={300}
                              src="/assets/GF7.JPEG"
                              preview={false}
                            />
                          </div> */}
                        <div>
                          <Image
                            width={800}
                            src="/assets/GF8.JPEG"
                            preview={false}
                            className="ImgBorder"
                          />
                        </div>
                        <div>
                          <Image
                            width={800}
                            src="/assets/GF9.JPEG"
                            preview={false}
                            className="ImgBorder"
                          />
                        </div>
                        <div>
                          <Image
                            width={700}
                            src="/assets/GF10.JPEG"
                            preview={false}
                            className="ImgBorder"
                          />
                        </div>
                      </Carousel>
                    </div>
                  </Col>
                  <Col
                    span={24}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      style={{
                        width: "120px",
                        marginTop: "20px",
                        color: "white",
                        backgroundColor: "#789DBC",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                      variant="solid"
                      onClick={() => setIsOtpCorrect(false)}
                    >
                      ลองอีกครั้ง
                    </Button>
                  </Col>
                </Row>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
