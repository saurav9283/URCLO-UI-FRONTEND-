import React from "react";
import { Modal, Box, Grid } from "@mui/material";
import { motion } from 'framer-motion';

const ServiceModel = ({ open, onClose, handleClose, selectedService }) => {
  console.log('selectedService: ', selectedService);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "80%", md: "60%" },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
          overflowY: 'auto',
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
          <h2>Services</h2>
          <motion.div
            onClick={handleClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>X</span>
          </motion.div>
        </Box>

        {/* Flex container for the cards */}
        <Grid container spacing={2}>
          {selectedService?.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.3 }}
                className="cursor-pointer relative flex flex-col items-center justify-end p-3 bg-white shadow-md rounded-xl hover:shadow-lg transition-transform h-36 overflow-hidden"
              >
                <div className="relative w-full h-36">
                  <img
                    className="h-full w-full object-cover rounded-t-lg shadow-lg"
                    src={service.image_url}
                    alt={service.cat_name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-t-lg"></div>
                </div>
                <p className="cursor-pointer absolute bottom-0 w-full text-center flex justify-center items-center md:mt-0 text-[11px] md:text-[14px] font-normal font-bellota text-white bg-black/90 h-12">
                  {service.cat_name}
                </p>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Modal>
  );
};

export default ServiceModel;
