import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Music, User, Building, Mail, ExternalLink } from 'lucide-react'
import './App.css'

// Import assets
import logo from './assets/logo_round.png'
import heroBackground from './assets/banner.png'
import artistPhoto from './assets/logo_rectangle.png'

function App() {
  const tracks = [
    { id: 1, title: "Der Untergang ist hier", released: "2025", spotifyLink: "https://open.spotify.com/album/2AfgDgOETDCcYJkjPURYHV?si=tQbqLmb1Txqy1GNVVnno2A" },
    { id: 2, title: "Du hast keine Panelen", released: "2025" }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center">
          <img src={logo} alt="My Green Noise Logo" className="w-64 h-64 mx-auto mb-8" />
          <h1 className="text-6xl font-bold mb-4 text-white">MY GREEN NOISE</h1>
          <p className="text-xl mb-8 text-gray-300">Electronic Music Producer</p>
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 text-lg"
            onClick={() => document.getElementById("music").scrollIntoView({ behavior: "smooth" })}
          >
            View Releases
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-orange-400">About the Artist</h2>
            <p className="text-lg mb-6 text-gray-300 leading-relaxed">
              My Green Noise is an innovative electronic music producer creating cutting-edge soundscapes 
              that blend ambient textures with driving rhythms. With a focus on experimental sound design 
              and atmospheric compositions, My Green Noise pushes the boundaries of electronic music.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="text-orange-400" size={20} />
                <span className="text-gray-300">Artist: My Green Noise</span>
              </div>
              <div className="flex items-center space-x-3">
                <Building className="text-orange-400" size={20} />
                <span className="text-gray-300">Label: My Green Noise Records</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-400" size={20} />
                <span className="text-gray-300">Contact: mygreennoise@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={artistPhoto} 
              alt="My Green Noise in Studio" 
              className="rounded-lg shadow-2xl max-w-md w-full"
            />
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">Latest Releases</h2>
          <div className="space-y-6">
            {tracks.map((track) => (
              <div key={track.id} className="bg-black rounded-lg p-6 flex items-center justify-between hover:bg-gray-800 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 rounded-full p-3">
                    <Music size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{track.title}</h3>
                    <p className="text-gray-400">My Green Noise • {track.released}</p>
                  </div>
                </div>
                {track.spotifyLink ? (
                  <a href={track.spotifyLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-orange-400 hover:text-orange-500">
                    <span className="text-sm">Listen on Spotify</span>
                    <ExternalLink size={20} />
                  </a>
                ) : (
                  <div className="flex items-center space-x-2 text-gray-400">
                    <span className="text-sm">Available on Spotify</span>
                    <ExternalLink size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Listen to My Green Noise on all major streaming platforms</p>
            <div className="flex justify-center space-x-6">
              <a href="https://open.spotify.com/artist/5Q1VhQnecqycr14xsA6lha" target="_blank" rel="noopener noreferrer">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  Spotify
                </Button>
              </a>
              <Button className="bg-gray-700 hover:bg-gray-600 text-white">
                Apple Music
              </Button>
              <Button className="bg-gray-700 hover:bg-gray-600 text-white">
                SoundCloud
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-orange-400">Get in Touch</h2>
          <p className="text-lg mb-8 text-gray-300">
            For bookings, collaborations, or general inquiries, reach out to My Green Noise.
          </p>
          <div className="bg-gray-900 rounded-lg p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="text-orange-400" size={24} />
                <span className="text-xl text-white">mygreennoise@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Building className="text-orange-400" size={24} />
                <span className="text-xl text-white">My Green Noise Records</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <img src={logo} alt="My Green Noise Logo" className="w-16 h-16 mx-auto mb-4" />
          <p className="text-gray-400 mb-2">© 2025 My Green Noise. All rights reserved.</p>
          <p className="text-gray-500 text-sm">
            Official website of My Green Noise - Electronic Music Producer
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Label: My Green Noise Records | Contact: mygreennoise@gmail.com
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

