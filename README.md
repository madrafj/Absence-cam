# Absence-cam
Introducing Absense Cam, a simple Attendance App with Face Recognition

## How to Run this Source Code?
1. First clone this Repo to your PC
2. Install all modules with npm by run the command below inside your local repo
``` 
npm install
```
3. Run the codes with npm start
```
npm start
```

## Or Try the Demo App by installing it directly to your smartphone
Install from https://absense-cam.vercel.app/ or from playstore https://play.google.com/store/apps/details?id=app.madraf.absence_cam

## How to Use ?
### A. Face References Menu
![image](https://user-images.githubusercontent.com/39622753/155891808-c716f029-572d-4f47-bddf-98e7f53b000a.png)
1. Add New Class/Group
    1. Click the **Add Member Icon** [1] on the Top Right 
    2. Fill in the class/group name and student/member name, then click **Continue**
    3. Continue to section **A.2.iii** below
2. Add Face References
    1. Choose class/group name in **Group Dropdown**
    2. Choose student/member name in **Member Dropdown**
    3. Click **Camera Icon** [2] on lower panel
    4. Take a photo containing single face you want to add by camera or get one from files storage (use 1:1 resolution ratio for best result)
    5. Click **Save**, if successful you will get notified and a **checked sign** will pop up above the photo
3. Delete Face Reference
    1. Choose class/group name in **Group Dropdown**
    2. Choose student/member name in **Member Dropdown**
    3. Click **Refs Info Icon** [3]
    4. Click **Reset** to delete all faces of the chosen student/member
### B. Face Recognition Menu
![image](https://user-images.githubusercontent.com/39622753/155893231-20df461b-73fc-4399-9195-41789c3a1c26.png)
1. Record Attendances
    1. Choose class/group name in **Group Dropdown**
    2. Click **Camera Icon** [6] on lower panel
    3. Take a photo containing 1-4 face (s), use 1:1 resolution ratio for best result
    4. The recognition result will be displayed on top the photo in a few seconds
    5. Redo step no iii for next students/members or to the ones that failed to be recognized
    6. Click **Proceed** to open confirmation window
    7. Click **Update** to save the result to database
2. Change current date (optional)
    1. Click **Calendar Icon** [5] on top right (We recommend you to do this before choosing class/group or before taking a photo)
    2. Choose the desired date
### C. Attendance Data Menu
![image](https://user-images.githubusercontent.com/39622753/155893711-cca3d746-a2f7-43b1-b65a-d5b691aea750.png)
1. View Attendance Table
    1. Choose class/group name in **Group Dropdown**
    2. Table will be displayed if data exists
    3. Click **Download** to download table as excel file

## Thanks
Big Thanks to Vincent Muhler for providing such a wonderful library [face-api.js](https://github.com/justadudewhohacks/face-api.js/)
