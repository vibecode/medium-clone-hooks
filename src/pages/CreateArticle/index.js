import React from 'react'

import ArticleForm from 'components/ArticleForm'

const CreateArticle = () => {
  const onSubmit = data => {
    console.log('data', data)
  }
  const initialValues = {
    title: 'foo',
    description: 'bar',
    body: 'baz',
    tagList: 'vvv'
  }
  const errors = {}
  return (
    <div>
      <ArticleForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        errors={errors}
      />
    </div>
  )
}

export default CreateArticle
