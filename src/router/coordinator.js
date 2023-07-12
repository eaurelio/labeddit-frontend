export function goToLoginPage (navigate) {
  navigate('/')
}
export function goToPostPage (navigate) {
  navigate("/posts")
}

export function goToSignUpPage (navigate) {
  navigate('/signup')
}

export function goToCommentPage (navigate, postId) {
  navigate(`/comments/${postId}`)
}

export function goToErrorPage (navigate) {
  navigate('/shuds')
}