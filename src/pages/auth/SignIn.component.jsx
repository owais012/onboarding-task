import React, { useState } from 'react';
import { TextField, Button, Typography, IconButton, InputAdornment } from '@mui/material';
import AppleIcon from '../../assets/AppleIcon.svg';
import FacebookIcon from '../../assets/FacebookIcon.svg';
import GoogleIcon from '../../assets/GoogleIcon.svg';
import LoginSvg from '../../assets/Login-pana.svg';
import LockIcon from '@mui/icons-material/Lock';
import TopGradientBackground from '../../assets/TopGradient.svg';
import BottomGradientBackground from '../../assets/BottomGradient.svg';
import { CallOutlined, VisibilityOffOutlined, VisibilityOutlined, EmailOutlined, PersonOutline, Image } from '@mui/icons-material';
import { BottomBgImage, Container, ContentBox, DividerWithText, FormContainer, InnerContainer, LoginLink, SignUpContainer, SmallText, SocialContainer, TopBgImage } from './Auth.styles.jsx';

const SignIN = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    return (
        <Container>
            <InnerContainer>
                <ContentBox>
                    <img src={LoginSvg} />
                </ContentBox>
                <ContentBox>
                    <TopBgImage>
                        <img src={TopGradientBackground} />
                    </TopBgImage>
                    <BottomBgImage>
                        <img src={BottomGradientBackground} />
                    </BottomBgImage>
                    <SignUpContainer>
                        <Typography gutterBottom sx={{
                            fontWeight: 'bold',
                            padding: {
                                xs: "0 30px",
                                sm: "0"
                            },
                            textAlign: 'center',
                            fontSize: {
                                xs: '36px',
                            },
                            lineHeight: 1,
                        }}>
                            Hello!
                        </Typography>
                        <Typography>
                            Sign In to your account
                        </Typography>
                        <FormContainer>
                            <TextField
                                placeholder="Username or Email"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonOutline />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <TextField
                                placeholder="Password"
                                variant="outlined"
                                fullWidth
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleClickShowPassword} edge="end">
                                                {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormContainer>

                        <Button variant="contained" fullWidth style={{ marginTop: '100px', color: '#ffffff', backgroundColor: '#000000', borderRadius: '40px', padding: '18px' }}>
                            Continue
                        </Button>

                        <DividerWithText>OR SIGNUP WITH</DividerWithText>

                        <SocialContainer>
                            <Button sx={{ backgroundColor: '#ffffff', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '100px', padding: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: 0 }}>
                                <img src={AppleIcon} />
                            </Button>
                            <Button sx={{ backgroundColor: '#1877F2', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '100px', padding: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: 0 }}>
                                <img src={FacebookIcon} />
                            </Button>
                            <Button sx={{ backgroundColor: '#ffffff', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '100px', padding: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: 0 }}>
                                <img src={GoogleIcon} />
                            </Button>
                        </SocialContainer>


                        <Typography variant="body2" color="textSecondary">
                            Already have an account?
                            <LoginLink href='/'>Create</LoginLink>
                        </Typography>
                        <Typography color="textSecondary" sx={{ textAlign: 'center', fontSize: '12px' }}>
                            By joining you aggree to our<br />
                            <SmallText> Privacy Policy </SmallText>
                            and
                            <SmallText> Terms of Use </SmallText>
                        </Typography>
                    </SignUpContainer>
                </ContentBox>
            </InnerContainer>
        </Container>
    );
};

export default SignIN;
