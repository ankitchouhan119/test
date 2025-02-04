import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import '../../css/SignUpForm.css'
import logo from '../../images/fullnameLogoAuraverse.png'; // Adjust the path based on your folder structure



const FormContainer = styled(Box)(({ theme }) => ({
  maxWidth: '800px',
  margin: 'auto',
  padding: theme.spacing(4),
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

export default function SignUpForm() {
  const [billingSameAsCompany, setBillingSameAsCompany] = React.useState(true);

  const handleCheckboxChange = () => {
    setBillingSameAsCompany(!billingSameAsCompany);
  };

  const [category, setCategory] = useState('');


  // for email verification.
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // for company's designation
  const [designation, setDesignation] = useState('');


  return (
    <CssBaseline>
      <FormContainer>
        {/* Logo */}
        <Box display="flex" justifyContent="center" mb={1}>
          {/* <img src="../../images/fullnameLogoAuraverse.png" alt="Logo" style={{ height: '6rem' }} /> */}
          <img src={logo} alt="AuraVerse Logo" className="logo" style={{ height: '5rem' }} />

        </Box>


        <Typography variant="h4" component="h1" gutterBottom>
          Sign Up
        </Typography>
        <Stack spacing={2}>
          {/* Company Name and Email in one line */}


          {/* section 1 */}
          <Typography variant="h6" gutterBottom>
            Company Info
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth label="Business Name" variant="outlined" required sx={{ height: '100%' }} />
            </Grid>
            <Grid item xs={6}>
              <FormControl label="Business Category" fullWidth sx={{ height: '100%' }}>
                {/* <FormLabel>Business Category</FormLabel> */}
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  displayEmpty
                  renderValue={(selected) => (selected ? selected : 'Select a Category')}
                >
                  <MenuItem value="E-commerce">E-commerce</MenuItem>
                  <MenuItem value="Finance">Finance</MenuItem>
                  <MenuItem value="Healthcare">Healthcare</MenuItem>
                  <MenuItem value="Real Estate">Real Estate </MenuItem>
                  <MenuItem value="Education">Education</MenuItem>
                  <MenuItem value="Hospitality and Travel">Hospitality and Travel</MenuItem>
                  <MenuItem value="Entertainment">Entertainment</MenuItem>
                  <MenuItem value="Technology and SaaS">Technology and SaaS</MenuItem>
                  <MenuItem value="Media and Publishing">Media and Publishing</MenuItem>
                  <MenuItem value="Legal Services">Legal Services</MenuItem>
                  <MenuItem value="Marketing and Advertising">Marketing and Advertising</MenuItem>
                  <MenuItem value="Retail">Retail</MenuItem>
                  <MenuItem value="Transportation and Logistics">Transportation and Logistics</MenuItem>
                  <MenuItem value="Manufacturing">Manufacturing</MenuItem>
                  <MenuItem value="Construction">Manufacturing</MenuItem>
                  <MenuItem value="Non-profit and Charity">Non-profit and Charity</MenuItem>
                  <MenuItem value="Human Resources">Human Resources</MenuItem>
                  <MenuItem value="Gaming">Gaming</MenuItem>
                  <MenuItem value="Sports and Fitness">Sports and Fitness</MenuItem>
                  <MenuItem value="Beauty and Wellness">Beauty and Wellness</MenuItem>
                  <MenuItem value="Food and Beverage">Food and Beverage</MenuItem>
                  <MenuItem value="Consulting and Professional Service">Consulting and Professional Service</MenuItem>
                  <MenuItem value="Government and Public Services">Government and Public Services</MenuItem>
                  <MenuItem value="Event Planning and Managment">Event Planning and Managment</MenuItem>

                </Select>
              </FormControl>
            </Grid>

          </Grid>


          {/* Password and Phone in one line */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth label="Email" type="email" variant="outlined" required />

            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Website" type="url" variant="outlined" />
            </Grid>
          </Grid>

          {/* Business Category and GST Number in one line */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth label="Primary Phone No." type="tel" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Secondary Phone No." type="tel" variant="outlined" />            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth label="GST Number" type="text" variant="outlined" required />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="PAN Card Number" type="text" variant="outlined" required />
            </Grid>
          </Grid>


          {/* Company Address Section */}
          <Typography variant="subtitle1" sx={{mt:1 }}>
            Company Address
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Line 1" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Line 2" variant="outlined" />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth label="City" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Pincode" type="number" variant="outlined" />
            </Grid>
          </Grid>



          <Grid container spacing={2}>
            <Grid item xs={6}>
              {/* state  */}
              <TextField fullWidth label="State" variant="outlined" />

            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Country" variant="outlined" />

              {/* country */}
            </Grid>
          </Grid>




          {/* User's info */}
          <Typography variant="h6" gutterBottom>
            User Info
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth label="First Name" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Last Name" variant="outlined" />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth label="Email" type="email" variant="outlined" required />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Primary Phone No." type="tel" variant="outlined" />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={password !== confirmPassword}
                helperText={password !== confirmPassword ? "Passwords do not match" : ""}
                required
              />
            </Grid>
          </Grid>





          <Grid container spacing={2}>
            <Grid item xs={12}><TextField
              fullWidth
              label="Designation"
              variant="outlined"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
            </Grid>


          </Grid>

          {/* Checkbox for Billing Address */}
          <FormControlLabel
            control={
              <Checkbox
                checked={billingSameAsCompany}
                onChange={handleCheckboxChange}
                color="primary"
              />
            }
            label="Billing address same as company address"
          />

          {/* Submit Button */}
          <Button variant="contained" color="primary" fullWidth>
            Verify Email
          </Button>

          {/* Link to Sign In */}
          <Typography align="center">
            Already have an account? <a href="/signin">Sign In</a>
          </Typography>
        </Stack>
      </FormContainer>
    </CssBaseline>
  );
}