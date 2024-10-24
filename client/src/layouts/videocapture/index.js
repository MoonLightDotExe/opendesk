import { useRef, useState, useEffect } from "react";
import axios from "axios";

import { Button } from "@mui/material";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { AlignVerticalCenter, FormatAlignJustify } from "@mui/icons-material";

function VideoCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [folderName, setFolderName] = useState("");

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        console.log("Webcam stream started:", stream);
      })
      .catch((err) => {
        console.error("Error accessing webcam:", err);
      });
  }, []);

  const startCapture = () => {
    setCapturing(true);
    const newFolderName = `jigisha`;
    setFolderName(newFolderName);

    const captureInterval = setInterval(() => {
      captureFrame(newFolderName);
    }, 1000);

    setTimeout(() => {
      clearInterval(captureInterval);
      setCapturing(false);
      alert("Stopped capturing after 10 seconds");
    }, 10000);
  };

  const captureFrame = async (folder) => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/png");
    console.log("Captured image data:", imageData);

    try {
      await axios.post(
        "http://localhost:5000/api/upload",
        { imageData, folder },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Frame uploaded successfully!");
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox
        mt={8}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MDBox sx={{ margin: "auto auto", borderRadius: "5px" }} borderRadius="md">
          <video
            ref={videoRef}
            autoPlay
            width="640"
            height="480"
            style={{ borderRadius: "5px" }}
          ></video>
          <canvas ref={canvasRef} width="640" height="480" style={{ display: "none" }}></canvas>
        </MDBox>
        <Button
          variant="contained"
          sx={{ color: "#ffffff", width: "20rem", margin: "1.5rem auto" }}
          onClick={startCapture}
          disabled={capturing}
        >
          {capturing ? "Capturing..." : "Start Capture"}
        </Button>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default VideoCapture;
