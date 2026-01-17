import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to jwaspin-dev</h1>
        <p className="text-lg text-gray-700 mb-8">
          A modern React application built with Vite, React Router, and Tailwind CSS.
        </p>
        <div className="space-y-4">
          <Link
            to="/markdown"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Markdown Demo
          </Link>
        </div>
      </div>
    </div>
  )
}
