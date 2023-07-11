import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../components/login/LoginPage";
import SignUpPage from "../components/signup/SignUpPage";
import PostsPage from "../components/posts/PostsPage"
import ErrorPage from "../components/error/ErrorPage";
import CommentPage from "../components/posts/CommentPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path={"/signup"} element={<SignUpPage />} />
        <Route path={"/posts"} element={<PostsPage />} />
        <Route path={"/comments"} element={<CommentPage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}