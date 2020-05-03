export function createPopupClass() {
    
    return class Popup extends window.google.maps.OverlayView  {
        constructor(props) {
            super(props) 
            this.position = props.position
            this.popupDiv = props.popupDiv
        }
    
        
        onAdd = function() {
          this.getPanes().floatPane.appendChild(this.popupDiv)
        }
      
        onRemove = function() {
          if (this.popupDiv.parentElement) {
            this.popupDiv.parentElement.removeChild(this.popupDiv)
          }
        }
      
        draw = function() {
          const divPosition = this.getProjection().fromLatLngToDivPixel(this.position)
     
            this.popupDiv.style.display = 'inline-block'
            this.popupDiv.style.left = divPosition.x + 'px'
            this.popupDiv.style.top = divPosition.y + 'px'
        }
    }
  }