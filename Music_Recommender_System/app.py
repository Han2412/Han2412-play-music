import pickle
import streamlit as st
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import requests
from PIL import Image
from io import BytesIO

# Spotify client account
CLIENT_ID = "fb45c46babdf44e3b55bf6b9bd4f7aa6"
CLIENT_SECRET = "2afd65a34cf8490b9e4d5054f5100954"

# Initialize the Spotify client
client_credentials_manager = SpotifyClientCredentials(client_id=CLIENT_ID, client_secret=CLIENT_SECRET)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

# Get music and image
def get_song_album_cover_url(song_name, artist_name):
    search_query = f"track:{song_name} artist:{artist_name}"
    results = sp.search(q=search_query, type="track")

    if results and results["tracks"]["items"]:
        track = results["tracks"]["items"][0]
        album_cover_url = track["album"]["images"][0]["url"]
        print(album_cover_url)
        return album_cover_url
    else:
        return "https://i.scdn.co/image/d6b657e803f59ddad8600f5fafe402b1d808f12d"

# Recommend system
def recommend(song):
    index = music[music['song'] == song].index[0]
    distances = sorted(list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
    recommended_music_names = []
    recommended_music_posters = []
    for i in distances[1:6]:
        # fetch the movie poster
        artist = music.iloc[i[0]].artist
        print(artist)
        print(music.iloc[i[0]].song)
        recommended_music_posters.append(get_song_album_cover_url(music.iloc[i[0]].song, artist))
        recommended_music_names.append(music.iloc[i[0]].song)
    return recommended_music_names,recommended_music_posters

#Load data from df and similarity file
music = pickle.load(open('Music_Recommender_System\df.pkl','rb'))
similarity = pickle.load(open('Music_Recommender_System\similarity.pkl','rb'))

# Send data to music web
def send_data_to_music_web_app(recommended_music_names, recommended_music_posters):
    data = {
        "recommended_music_names": recommended_music_names,
        "recommended_music_posters": recommended_music_posters
    }
    response = requests.post('http://localhost:3000/receive_data', json=data)
    return response

music_list = music['song'].values
selected_movie = st.selectbox("", music_list)

if st.button('Recommend'):
    recommended_music_names, recommended_music_posters = recommend(selected_movie)
    send_data_to_music_web_app(recommended_music_names, recommended_music_posters)