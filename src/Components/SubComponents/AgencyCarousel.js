import React from "react";
import Slider from "react-slick";
import "./index.css";
import { Card, Typography } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

const AgencyCarousel = ({ data }) => {
  console.log("data", data);
  var settings = {
    dots: false,
    centerMode: true,
    centerPadding: "40px",
    className: "centerLM",
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const useStyles = makeStyles(theme => ({
    root: {
      position: "relative",
      height: "240px !important"
    },
    font: {
      display: "none",
      top: "0%",
      color: "white",
      width: "100%",
      height: "100% !important",
      padding: "10px !important ",
      position: "absolute",
      textAlign: "center",
      fontWeight: "bold",
      borderRadius: "4px",
      backgroundColor: "rgba(58, 180, 78, 0.9)",
    },
    emailCenter: {
      color: "white !important",
      border: "1px solid white !important",
      marginTop: "10px !important",
    },
    phoneCenter: {
      color: "#3AB44E !important",
      background: "white !important",
      width: "153px !important",
      margin: "20px !important",

    },
    image: {
      border: "3px solid white ",
      marginTop: "6px !important",
      boxShadow: "1px 1px 5px",
      borderRadius: "5px",
      
    }
  }));

  const classes = useStyles();

  return (
    <div className="AgencyContainer">
      <Slider {...settings}>
        {data.map((item, i) => (
          <Card sx={{ maxWidth: 345, boxShadow: "none" }} className={classes.root}>
            <img src={item.logo} className={classes.image} alt='item error'/>
            <Typography
              gutterBottom
              className={classes.font}
              id="agency_center"
            >
              <h6 className="font-weight-bold pb-3">Al- Muqeet Agency</h6>
              <p className="pb-2"><strong>10 </strong>Properties For Sale</p>
              <p><strong>20 </strong>Properties For Rent</p>
              <button className="btn btn-outline-light btn-block mt-3">
                <MailIcon sx={{ paddingRight: "5px", paddingTop: "10px" }} />Info@almuqeet.com
              </button>
              <button className="btn btn-light btn-block mt-3">
                <PhoneIcon sx={{ paddingRight: "5px", paddingTop: "10px" }} />03339633908
              </button>
            </Typography>
          </Card>
        ))}
      </Slider>
    </div>
  )
}

export default AgencyCarousel;
