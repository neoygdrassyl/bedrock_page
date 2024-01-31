export function News_Structure({ id, title, category, date, image, info,imageTranscript }) {
    return (

<div className='container'>
  <div class="row align-items-center py-1">
    <div class="col-12 px-4 border border-info py-4 m-3" style={{ backgroundColor: '#f9f9f9', borderRadius: '2px', border: '1px' }}>
      <div className="px-4 py-2 relative">
        <h3 className="text-center" id={id}>
          {title} <i class="fas fa-newspaper"></i>
        </h3>
        <div className="py-2">
          <label>
            <label className="px-2" style={{ color: 'gray' }}>
              <i class="fas fa-clock text-info"></i> {date}
            </label>{' '}
            <label className="px-2" style={{ color: 'gray' }}>
              <i class="fas fa-user text-info"></i> Curaduria 1 de Bucaramanga
            </label>{' '}
            <label className="px-1" style={{ color: 'gray' }}>
              <i class="fas fa-folder text-info"></i> {category}
            </label>{' '}
          </label>
        </div>

        <div className='container'>
          <div class="row justify-content-start">
            <div className='col-12 col-lg-10 '>
              <div className='text-justify fw-normal'>
                {info}
              </div>
            </div>
            <div class="col-12 col-lg-2 h-150 w-150 d-flex align-items-center p-0 ml-lg-4">
              <img src={image} class=" w-80 h-80" style={{ marginLeft: '20px', maxWidth: '100%' }} alt={imageTranscript} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}   