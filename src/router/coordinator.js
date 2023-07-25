export const goToLoginPage = (navigate) => {
  navigate("/")
}

export const goToSignUpPage = navigate => {
  navigate("/signup")
}

export const goToCommentPage = (navigate, postId) => {
  navigate(`/comments/${postId}`)
}

export const goToErrorPage = navigate => {
  navigate("*")
}

export const goToPostPage = (navigate) => {
  navigate("/posts")
}