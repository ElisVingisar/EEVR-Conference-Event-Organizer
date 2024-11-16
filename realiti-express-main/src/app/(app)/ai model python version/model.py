#!pip install langchain
#!pip install huggingface_hub
#!pip install langchain-community
#!pip install fastapi uvicorn

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from random import uniform
from huggingface_hub import HuggingFaceHub
import os

#os.environ["HUGGINGFACEHUB_API_TOKEN"] = 

app = FastAPI()

class PostRequest(BaseModel):
    prompt: str
    formdata: dict
    eventinfo: dict

def cleanresponse(result, prompt):
    return result[len(prompt):].strip()

def post_generator(prompt, formdata, eventinfo):
    temperature = uniform(0.6, 1.0)
    llm = HuggingFaceHub(repo_id="tiiuae/falcon-7b-instruct", model_kwargs={"temperature":temperature})
    response = llm(prompt)
    post = cleanresponse(response)
    return post

@app.post("/generate_post")
async def generate_post(request: PostRequest):
    try:
        posts = [post_generator(request.prompt, request.formdata, request.eventinfo) for _ in range(3)]
        return {"posts": posts}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

formData = {
    "name": "Test Speaker",
    "talktitle": "The Future of Immersive Technology",
    "info": "I have graduated from the University of Tartu with honors, I have been working at VR 3000 as a senior executive for 5 years",
    "arrivalDate": "2024-11-25",
    "departureDate": "2024-11-27"
}

eventInfo = {
    "name": "Baltic Virtual Reality Event of 2025",
    "dates" : "2024-11-30",
    "hashtag" : "#estonianxr" 
}
prompt = f"""Generate a short social media post for the {eventInfo["name"]}. Include the following information: 
    Talk Title: {formData['talktitle']}
    Event dates: {eventInfo["dates"]}
    Event hashtag: {eventInfo["hashtag"]}
    Speaker Info: {formData['info']}
    Include an engaging tone for a professional audience. Write from the perspective of the speaker. Include the event hashtag at the end of the post. Definitely mention the talk title. Do not use any links. Include only one response and nothing else."""
print(post_generator(prompt, formData, eventInfo))