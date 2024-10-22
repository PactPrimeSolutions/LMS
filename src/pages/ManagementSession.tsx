import React, { useState, useEffect } from 'react'
import { ChevronRight, Pencil, Plus, Play, Download, Trash } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

interface Course {
  id: number;
  title: string;
  summary: string;
  program: {
    id: number;
    title: string;
  };
  slug: string;
}

interface Video {
  id: number;
  title: string;
  timestamp: string;
  slug: string;
}

interface File {
  id: number;
  title: string;
  upload_time: string;
  updated_date: string;
  extension: string;
}

export default function ManagementSession() {
  const { id } = useParams<{ id: string }>()
  const [course, setCourse] = useState<Course | null>(null)
  const [videos, setVideos] = useState<Video[]>([])
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    // Simulating API call to fetch course details
    const fetchCourseDetails = async () => {
      const courseData: Course = {
        id: parseInt(id || '1'),
        title: 'Web Development Fundamentals',
        summary: 'Learn the basics of HTML, CSS, and JavaScript',
        program: { id: 1, title: 'Full Stack Development' },
        slug: 'web-dev-fundamentals'
      }
      setCourse(courseData)

      setVideos([
        { id: 1, title: 'Introduction to HTML', timestamp: '2023-05-15', slug: 'intro-html' },
        { id: 2, title: 'CSS Basics', timestamp: '2023-05-20', slug: 'css-basics' },
        { id: 3, title: 'Javascript', timestamp: '2023-05-25', slug: 'javascript' },
        { id: 4, title: 'React JS', timestamp: '2023-05-30', slug: 'react-js' },
        { id: 5, title: 'Python', timestamp: '2023-06-05', slug: 'python' },
      ])

      setFiles([
        { id: 1, title: 'HTML Cheat Sheet', upload_time: '2023-05-10', updated_date: '2023-05-12', extension: 'pdf' },
        { id: 2, title: 'CSS Reference Guide', upload_time: '2023-05-18', updated_date: '2023-05-18', extension: 'docx' },
        { id: 3, title: 'JavaScript Basics', upload_time: '2023-05-22', updated_date: '2023-05-24', extension: 'pdf' },
        { id: 4, title: 'React Fundamentals', upload_time: '2023-05-28', updated_date: '2023-05-29', extension: 'pdf' },
        { id: 5, title: 'Python Cheatsheet', upload_time: '2023-06-02', updated_date: '2023-06-03', extension: 'pdf' },
      ])
    }

    fetchCourseDetails()
  }, [id])

  const isAdmin = true // Replace with actual user role check

  if (!course) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          </li>
          <ChevronRight className="w-5 h-5 text-gray-400" />
          <li className="inline-flex items-center">
            <Link to="/programs" className="text-gray-700 hover:text-blue-600">Programs</Link>
          </li>
          <ChevronRight className="w-5 h-5 text-gray-400" />
          <li className="inline-flex items-center">
            <Link to={`/programs/${course.program.id}`} className="text-gray-700 hover:text-blue-600">{course.program.title}</Link>
          </li>
          <ChevronRight className="w-5 h-5 text-gray-400" />
          <li>
            <span className="text-gray-500 ml-1 md:ml-2">{course.title}</span>
          </li>
        </ol>
      </nav>

      <div className="flex flex-wrap gap-4 mb-8">
        {isAdmin && (
          <button className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 font-bold py-2 px-4 rounded inline-flex items-center">
            <Pencil className="w-4 h-4 mr-2" />
            Edit course
          </button>
        )}
        {isAdmin && (
          <>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              Upload new file
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              Upload new video
            </button>
          </>
        )}
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded inline-flex items-center ml-auto">
          <Play className="w-4 h-4 mr-2" />
          Take a Quiz
        </button>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-2">{course.title}</h1>
      <p className="text-gray-600 mb-8">{course.summary}</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Video Tutorials and Documentation</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Video Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uploaded Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Get Started</th>
                  {isAdmin && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {videos.map((video, index) => (
                  <React.Fragment key={video.id}>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link to={`/videos/${video.slug}`} className="text-blue-600 hover:text-blue-900 flex items-center">
                          <Play className="w-4 h-4 mr-2" />
                          {video.title}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{video.timestamp}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 font-bold py-1 px-3 rounded inline-flex items-center text-sm">
                          <Play className="w-4 h-4 mr-2" />
                          Play now
                        </button>
                      </td>
                      {isAdmin && (
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-indigo-600 hover:text-indigo-900">
                              <Pencil className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      )}
                    </tr>
                    {files.filter(file => file.id === video.id).map((file) => (
                      <tr key={`doc-${file.id}`} className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                        <td className="px-6 py-4 whitespace-nowrap" colSpan={3}>
                          <Link to={`/files/${file.id}`} className="text-blue-600 hover:text-blue-900 flex items-center">
                            <Download className="w-4 h-4 mr-2" />
                            {file.title}
                          </Link>
                        </td>
                        {isAdmin && (
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-indigo-600 hover:text-indigo-900">
                                <Pencil className="w-4 h-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <Trash className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        )}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
