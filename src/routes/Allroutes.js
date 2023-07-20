import { Routes, Route } from "react-router-dom"
import { HomePage, CreatePost, PageNotFound } from '../pages'
import { ProtectedRoute } from './ProtectedRoute'


export const Allroutes = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="create" element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </main>
    )
}
