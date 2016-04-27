require('babel-register')
require('ava')('feedback', t => {
	t.truthy(require('./public/js/feedback/feedback'))
})
