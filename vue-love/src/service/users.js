export const login = async ({ userAccount = "zhangsan", userPwd = "123123" } = {}) => await
    fetch(`/users/login?userAccount=${userAccount}&userPwd=${userPwd}`)
    .then(Response => Response.json())


