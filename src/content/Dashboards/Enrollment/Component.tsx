import { Box, Button, OutlinedInput ,Chip, Container, FormControl, InputLabel, MenuItem, Select, Stack, TextField, FilledInput } from '@mui/material'
import React, { useState } from 'react'
  import CancelIcon from "@mui/icons-material/Cancel";
  const names = [
    "Humaira Sims",
    "Santiago Solis",
    "Dawid Floyd",
    "Mateo Barlow",
    "Samia Navarro",
    "Kaden Fields",
    "Genevieve Watkins",
    "Mariah Hickman",
    "Rocco Richardson",
    "Harris Glenn"
  ];

const Component = (props) => {
    const [selectedNames, setSelectedNames] = useState([]);
  return (
    <FormControl variant="filled" sx={{bgcolor:"white",}} fullWidth>
      <InputLabel>{props.componentName}</InputLabel>
      <Select
        multiple
        value={selectedNames}
        onChange={(e) => setSelectedNames(e.target.value)}
        renderValue={(selected) => (
          <Stack direction="row" flexWrap="nowrap" sx={{
            overflow: "auto",
            scrollbarWidth: "none", 
            '&::-webkit-scrollbar': {
                display: 'none',  
            },
            '&-ms-overflow-style:': {
                display: 'none', 
            },
          }}>
            {selected.map((value) => (
              <Chip
                key={value}
                label={value}
                onDelete={() =>
                  setSelectedNames(
                    selectedNames.filter((item) => item !== value)
                  )
                }
                deleteIcon={
                  <CancelIcon
                    onMouseDown={(event) => event.stopPropagation()}
                  />
                }
              />
            ))}
          </Stack>
        )}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
export default Component

export const Upload = ({ 
  label = 'Upload Files', 
  accept = 'image/*', 
  labelWidth = '80%', 
  displayHeight = '50px',
  displayWidth = '100%',
  onFilesUpload,
  id 
}) => {
  const [imageUrls, setImageUrls] = useState([]);

  const handleFileUpload = (event) => {
      const files = event.target.files;
      const urls = [];

      Array.from(files).forEach(file => {
          const reader = new FileReader();
          reader.onloadend = () => {
              urls.push(reader.result);
              if (urls.length === files.length) {
                  setImageUrls(urls);
                  if (onFilesUpload) {
                      onFilesUpload(urls); // Pass the array of URLs to a parent component or perform some action.
                  }
              }
          };
          reader.readAsDataURL(file);
      });
  }

  return (
      <FormControl variant="filled" sx={{ bgcolor: "whitesmoke" }} fullWidth>
          <Stack alignItems="center" height={displayHeight} width={displayWidth}>
              <label htmlFor={"upload-files"+id} style={{ height: "", width: labelWidth }}>
                  <input
                      id={"upload-files"+id}
                      accept={accept}
                      type="file"
                      multiple
                      style={{ display: 'none', backgroundColor: "red" }}
                      onChange={handleFileUpload}
                  />
                  <Box width="100%" sx={{ justifyContent: "space-between", display: "flex", height: "100%" }}>
                      {label}
                      {imageUrls.map((url, index) => (
                          <img key={index} src={url} alt={`Uploaded Image ${index}`} height={30} />
                      ))}
                  </Box>
              </label>
          </Stack>
      </FormControl>
  );
}