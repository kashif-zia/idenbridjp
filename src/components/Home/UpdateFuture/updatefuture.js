import React from "react";
import UpdateFutureimg from 'assets/images/updateFutere.svg'
import Marquee from "react-fast-marquee"; 
import { ReactSVG } from "react-svg";

          // eslint-disable-next-line no-unused-vars
          export default function UpdateFuture() {
              return (
                <Marquee speed='150'>
                <ReactSVG className='mx-5' src={UpdateFutureimg} alt='futureImg' /> &nbsp; &nbsp; &nbsp;
        
              </Marquee>
            
              );
            }
          