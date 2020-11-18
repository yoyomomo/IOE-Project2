# EngM IOE-Project2

## Physical Computing and Interactive Tech
### Using Arduino and P5.js

#### Overview

The project uses physical computing with Arduino and P5.js and or other web browser components that can be used to create an interaction between the Arduino and the browser and vice versa. Using a potentiometer and the data input into the serial monitor, that data is transferred over to the P5.js sketch using serial communication. This allowed for a dynamic P5 sketch that showed a visual representation of the potentiometer’s values using the noise mapping function in P5.

#### Problem statement

The main goal of the project was to create a product that could be wearable, an art installation or a product/appliance that could be used or interacted with in real life. However, due to the constraints on our abilities to go outside and explore the environment around us, the project mainly takes into account our living space and how we go about our daily routines in life. With this idea in mind, using P5, Arduino, and the supplies on hand, a project can be created. Using inspiration from various things in life such as speech, sound, light or human motions.

#### Users & Audience

The main audience of the project is possible investors for these kinds of physical computing products. The audience could also be the people who are meant to interact with the project. 

#### Roles & Responsibilities 

Although the project was mostly an individual piece of work, the project also had a group learning component which allowed the group members to build and learn from the different areas of expertise that were being experimented with. The project I did mostly focused on furthering understanding how Arduino can communicate to the P5.js sketches.

One member, Jody experimented mostly with Arduino and the components of colour changing LEDs. They also used a colour sensor which would allow them to pick up the numerical colour values of any object the sensor is placed on. 

#### Jody's Videos:

[Colour Sensor](https://drive.google.com/file/d/18pBv2CVDGkopriu3Afy3Qzx3NriUuPrV/view?usp=sharing)
https://drive.google.com/file/d/1P8KKth2UHCCj0yrHhAXooMw1Y2S6YP74/view?usp=sharing
https://drive.google.com/file/d/1YC2MCliezfr0LQWQ3WDFxWaWYcMcv4FJ/view?usp=sharing
https://drive.google.com/file/d/1YC2MCliezfr0LQWQ3WDFxWaWYcMcv4FJ/view?usp=sharing


Another group member, Deanna focused on using the P5.js library of PoseNet. This allowed them to create serial communication between various lights, distance sensors and servo motors.

#### Deanna's Videos:

[Motor with Posenet](https://drive.google.com/file/d/1YWXn6mm9NHg4N1eH8VnqJbd2hiljQXC0/view?usp=sharing)

LED brightness with Posenet

https://drive.google.com/file/d/1YWXn6mm9NHg4N1eH8VnqJbd2hiljQXC0/view?usp=sharing
https://drive.google.com/file/d/1Ww53fMhjRjvKomOwr_nP8jqYii1oapP3/view?usp=sharing

[Posent and Distance Sensor](https://drive.google.com/file/d/1e-kS4PFkmydM4JNUotsWOAFEb4_IQSIj/view?usp=sharing)

LED switch with Posenet

https://drive.google.com/file/d/1SQCf-iptqrPb_7XXofQqy9wguWAVrn__/view?usp=sharing
https://drive.google.com/file/d/1unHZOmVWPhGq7xYx7NjwqDMQeCC38iAr/view?usp=sharing

#### Scope & Constraints 

The biggest constraint the project had was a material constraint. Due to the current situation, it’s harder to acquire materials at stores and it is also difficult to get ordered items in at the right time due to slower mailing processes. With a material constraint, however, it makes it as an added challenge to create a project that uses the materials that are on hand rather than just getting something at the snap of a finger.

#### Process

Before moving forward with the project, researching different kinds of P5 sketches was done. For the project, different types of p5 sketches were researched.  Most of the ones taken into account were the ones that looked like they would be visually interesting when created for Arduino and P5 interactions. 

![Noise Map Reference](https://github.com/yoyomomo/IOE-Project2/blob/main/imgs/img1.png)![Map Reference](https://github.com/yoyomomo/IOE-Project2/blob/main/imgs/img2.png)![Researching Other P5 Sketches](https://github.com/yoyomomo/IOE-Project2/blob/main/imgs/img4.png)

For a better understanding of how serial communication between P5 and Arduino worked research was done to look at other examples of projects done by other creators. 

![Researching Serial Communication](https://github.com/yoyomomo/IOE-Project2/blob/main/imgs/img3.png)
[Link](https://medium.com/@yyyyyyyuan/tutorial-serial-communication-with-arduino-and-p5-js-cd39b3ac10ce)

The project had multiple kinds of Arduino and P5 sketches provided to experiment and explore the different ways serial communication worked. 

##### Video of testing P5 LED switch:

[LED Test 1](https://drive.google.com/file/d/1UpvtF59pGtPHxbXwP6O44KhjvKG_k4My/view?usp=sharing),
[LED Test 2](https://drive.google.com/file/d/1XRBG_8xVDijvKF6GwZ-MMFHhLDYP4Nln/view?usp=sharing),
[LED Test 3](https://drive.google.com/file/d/1spA42w43NjKXsDwxiZ8OR3uykIP118Aq/view?usp=sharing)

##### Video of testing P5 to servo switch:

[Servo Test 1](https://drive.google.com/file/d/1OYIzIHbXI4fkDA10jyA6O_1yvOfnzV49/view?usp=sharing),
[Servo Test 2](https://drive.google.com/file/d/1OofD1-KxzlFcrtIxxAPj2dxCJK_7zTmb/view?usp=sharing),
[Servo Test 3](https://drive.google.com/file/d/1vaiNnmXhMtSjlH3NSJpZhaoXnv4MgAH1/view?usp=sharing)

##### [Video of testing value change with photoresistor to P5](https://drive.google.com/file/d/19Bqtl2Q1Uxy1HjWtPf-tnkfXkl5F86Q0/view?usp=sharing)

##### [Video of testing value change with potentiometer to P5](https://drive.google.com/file/d/1IHgYaMWaHaOmVaAY0Y9-_bBRfdd84hT9/view?usp=sharing)

After working with different kinds of sensors, LEDs and servo interactions, one of the final directions the project went in was using noise mapping to create a visual expression of the potentiometer's value. Initially, there were some issues with the mapping of the values of the potentiometer and it would only show a brief spike in the change in values. However, at the end of the project, a proper expression of when the potentiometer is at the minimum value and at the maximum value was expressed.

![Brackets Code for P5](https://github.com/yoyomomo/IOE-Project2/blob/main/imgs/img6.png)
![Arduino Codes](https://github.com/yoyomomo/IOE-Project2/blob/main/imgs/img7.png)

##### Video of different iterations of noise mapping with potentiometer:

[Iteration 1](https://drive.google.com/file/d/1pl4_BC4Xd-gzTPGPt-MMrBnd3uTF8ncW/view?usp=sharing),
[Iteration 2](https://drive.google.com/file/d/1Sq1ed7HP1tR2GkeKeYtWaeYszvnzPoH-/view?usp=sharing),
[Iteration 3](https://drive.google.com/file/d/1u_CpudUEW5dZMEnmwfc-Jr42clNjruMB/view?usp=sharing),
[Iteration 4](https://drive.google.com/file/d/1E574ibDxSmb0jT8BY6sfIeMLDHq1L-Il/view?usp=sharing),
[Iteration 5](https://drive.google.com/file/d/1O-k3FQZnnxhegyQkC5HIQaIt2rUVq5z0/view?usp=sharing),
[Iteration 6](https://drive.google.com/file/d/1crBbaQMYMd2JPIjwu7Kb9GaTICAEtUbB/view?usp=sharing),
[Iteration 7](https://drive.google.com/file/d/1LXtoaD5djBA5rxuG_z1brLnJN40a6v8C/view?usp=sharing)

#### Outcomes & Results

At the end of the project, several kinds of serial communication between the browser and Arduino were made. With this project a deeper understanding of how to create meaningful designs using Arduino to P5 was made. Some lessons that were learned from this project was that troubleshooting errors for this kind of extensive communication is necessary, however having a team to help you troubleshoot the errors is extremely helpful since it puts another set of eyes on the project. 

[Video of final iteration of noise mapping with potentiometer](https://drive.google.com/file/d/15EW5iCfOGGJqcq-c_wyFkucRFFHtH8r-/view?usp=sharing)
