export function createPopupClass() {
    
    return class Popup extends window.google.maps.OverlayView  {
        constructor(props) {
            super(props) 
            this.position = props.position
            this.content = props.content
            this.containerDiv = props.containerDiv

        //     this.content.classList.add('popup-bubble')
        
        // // console.log(props.content)
        //     const bubbleAnchor = document.createElement('div')
        //     bubbleAnchor.classList.add('popup-bubble-anchor')
        //     bubbleAnchor.appendChild(this.content)
        

        //     this.containerDiv = document.createElement('div')
        //     this.containerDiv.classList.add('popup-container')
        //     this.containerDiv.appendChild(bubbleAnchor)
        }
    
        
        onAdd = function() {
          this.getPanes().floatPane.appendChild(this.containerDiv)
        }
      
        onRemove = function() {
          if (this.containerDiv.parentElement) {
            this.containerDiv.parentElement.removeChild(this.containerDiv)
          }
        }
      
        draw = function() {
          const divPosition = this.getProjection().fromLatLngToDivPixel(this.position)
     
            this.containerDiv.style.display = 'block'
            this.containerDiv.style.left = divPosition.x + 'px'
            this.containerDiv.style.top = divPosition.y + 'px'
        }
    }
  }