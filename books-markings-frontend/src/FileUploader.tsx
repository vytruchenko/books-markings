import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";

interface FileUploadProps {
  onFileRead: (fileContents: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileRead }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      if (selectedFile.type === "text/plain") {
        setFile(selectedFile);
      } else {
        alert("Please select a .txt file");
      }
    }
  };

  const handleFileRead = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target) {
        const contents = event.target.result as string;

        const fileEntries = contents.split("==========");

        console.log(fileEntries);
        onFileRead(contents);
      }
    };
    reader.readAsText(file);
  };

  const handleUploadButtonClick = () => {
    if (file) {
      handleFileRead(file);
    } else {
      alert("Please select a file to upload");
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Typography variant="h5">Upload a .txt File</Typography>
          <input
            accept=".txt"
            style={{ display: "none" }}
            id="file-upload"
            type="file"
            onChange={handleFileUpload}
          />
          <label htmlFor="file-upload">
            <Button variant="contained" color="primary" component="span">
              Select File
            </Button>
          </label>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUploadButtonClick}
          >
            Upload
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FileUpload;