

Health Care AI Assistant
About The Project
This project is a web-based bilingual health assistant that leverages OpenAI’s GPT-3.5 Turbo model to help users evaluate their symptoms. Users can input their symptoms via text or voice, and the system provides structured health advice, including possible medical conditions, recommended actions, and mandatory legal disclaimers.


Developed as a graduation thesis at Çukurova University , this assistant bridges the gap in accessing clear, verified, and user-friendly medical information. To ensure high-quality and culturally accurate responses, the underlying language model was fine-tuned using a custom dataset of 100 curated medical simulation examples.

![Application Input Screen](images/picture1.png)

![AI Analysis Results](images/picture2.png)

![Symptom History Charts](images/picture3.png)
Key Features
	•	Bilingual Support: The application dynamically accepts and processes inputs in both Turkish and English, producing responses that match the user's input language.
	•	Voice Input: Integrated Web Speech API allows users to interact with the system via voice commands, improving accessibility.
	•	Structured & Safe AI Outputs: Utilizing OpenAI's function calling capability, the AI generates predictable, structured JSON responses, preventing hallucinated or disorganized outputs.
	•	Health History Management: Authenticated users can save their interactions securely in the cloud. Each analysis outcome, including the original symptom and AI response, is stored with a timestamp.
	•	Data Visualization: The dashboard uses interactive line charts to display symptom trends over time, helping users track recurring health patterns like headaches or nausea.
	•	Ethical AI Implementation: The system is strictly prohibited from making direct medical diagnoses and automatically embeds mandatory medical disclaimers in all outputs and UI elements.
Tech Stack
	•	Frontend: React.js, TypeScript 
	•	Styling & Animation: Tailwind CSS, Framer Motion 
	•	Backend & Database: Firebase Authentication, Cloud Firestore 
	•	AI Integration: OpenAI API (Fine-tuned GPT-3.5 Turbo) 
	•	Data Visualization: Recharts 
Architecture Overview
The application operates on a modern client-server architecture. The React-based frontend connects to Firebase for secure user authentication and NoSQL data storage. For symptom analysis, a dedicated service layer (openaiService.ts) handles communication with the OpenAI API. This layer enforces structured outputs via a specific symptom_analysis function schema, ensuring the extraction of possibleConditions, recommendedActions, and a disclaimer.


Getting Started
Prerequisites
	•	Node.js and npm installed.
	•	A Firebase account with Authentication and Firestore enabled.
	•	An OpenAI API key with access to fine-tuned models.
Installation
	1	Clone the repositoryBashgit clone https://github.com/yourusername/health-care-ai-assistant.git
	2	cd health-care-ai-assistant
	3	
	4	Install dependenciesBashnpm install
	5	
	6	Environment VariablesCreate a .env file in the root directory and add your API keys securely:Kod snippet'iREACT_APP_FIREBASE_API_KEY=your_firebase_api_key
	7	REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
	8	REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
	9	REACT_APP_OPENAI_API_KEY=your_openai_api_key
	10	REACT_APP_OPENAI_MODEL=ft:gpt-3.5-turbo:your-org:your-custom-model-id
	11	
	12	Run the development serverBashnpm start
	13	
Disclaimer
This application functions as an initial educational resource and remains entirely separate from professional medical services. It is not a substitute for a real doctor and cannot provide medical diagnoses or treatments. Always consult a healthcare professional for medical concerns.


Author
	•	Doğan Bilir - Computer Engineering, Çukurova University 
	•	Advisor: Prof. Dr. Mehmet Fatih Akay 
