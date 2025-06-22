# Forest Fire ML Prediction Project 🔥

This is a complete end-to-end Machine Learning project for predicting forest fires.  
Developed as part of my learning on ML project lifecycle and Flask app deployment.

The project includes:

- Data preprocessing  
- Model building (Ridge Regression)  
- Scaling and transforming data  
- Saving model artifacts (pickle)  
- Deploying with Flask web app  
- User input + Prediction output

---

## 📂 Project Structure

forestfire-main/<br>
├── application.py<br>
├── models/<br>
│   ├── ridge.pkl  
│   └── scaler.pkl  
├── templates/  
│   └── home.html  
├── static/ (optional)  
│   └── style.css  
├── README.md  
└── requirements.txt  

## 📂 How to run it locally
1️⃣ Clone the repository:<br>
   &nbsp; git clone https://github.com/mansii26_/forestfire-main.git<br>
    &nbsp; cd forestfire-main<br>
2️⃣ Create and activate a virtual environment:<br>
    &nbsp;conda create -n flaskenv python=3.10<br>
    &nbsp;conda activate flaskenv<br>
3️⃣ Install the required Python packages:<br>
      &nbsp;pip install -r requirements.txt<br>
4️⃣ Run the Flask app: <br>
      &nbsp;python application.py<br>

 ## 📸 Screenshots

### Homepage

![Homepage](static\screenshots\Homepage.png)

### Prediction Page  

![Enter Data Form](static\screenshots\EnterData.png)  


### Prediction Page

![Prediction Page](static\screenshots\Prediction.png)

    
