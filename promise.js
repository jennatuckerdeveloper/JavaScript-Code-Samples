const promise = (successStatus) => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			successStatus ? res(5) : rej(new Error('Not connecting'))
		}, 1000)
	})
}

const promiseHandlerThenCatch = (status) => {
	return promise(status).then(console.log).catch(console.log)
}

const promiseHandlerTryCatch = async (status) => {
	try {
		return await promise(status)
	} catch (err) {
		return `Our error is: ${err}`
	}
}

promiseHandlerThenCatch(false)
promiseHandlerThenCatch(true)

const call = async () => {
  const res1 = await promiseHandlerTryCatch(false)
  const res2 = await promiseHandlerTryCatch(true)
  console.log(res1)
	console.log(res2)
}

call()