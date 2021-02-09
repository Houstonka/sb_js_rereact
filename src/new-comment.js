import React from 'react';

const newComment = (params) => {
  return (
    <div>
      <h5>Добавить новый комментарий: </h5>
        <div  className='comment card bg-light mb-3'>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Имя</label>
                <input type="text" className="form-control" id="name" onKeyUp = {
                  ev => {}
                } />
              </div>
              <div className="mb-3">
                <label htmlFor="comment" className="form-label">Комментарий</label>
                <textarea className="form-control" id="comment" onKeyUp = {
                  ev => {}
                } />
              </div>
              <button type="submit" className="btn btn-primary" onClick = {
                params.addComment('author', 'text')
              }>Опубликовать</button>
            </form>
          </div>
        </div>
      </div>
  );
}
export default newComment
