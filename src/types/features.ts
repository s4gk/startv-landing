import React from "react";

export interface IFeaturesData {
   icon: React.ReactElement;
   title: string;
   description: string;
}

export interface ITestimonialData {
   id: number;
   image: string;
   name: string;
   occupation: string;
   comment: string;
   rating: number;
}