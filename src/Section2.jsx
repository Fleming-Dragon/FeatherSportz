
import './Section2.css'
function Section2() {
  return (
    <>
      <div className="section2">
        <div className="mainpage">
          <div className="box_container">

            {/* first box */}
            <div className="boxparent" >
              <div className="box box1">
                <div className="boxhead">
                  <div className="boxicon"></div>
                  <div className="boxheading">Heading</div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere.</p>
                <button className="hiddenbtn">something</button>
              </div>
            </div>

            {/* another box */}
            <div className="boxparent" >
              <div className="box box2">
                <div className="boxhead">
                  <div className="boxicon">
                  </div>
                  <div className="boxheading">Heading</div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere.</p>
                <button className="hiddenbtn">something</button>
              </div>
            </div>
            {/* another box */}
            <div className="boxparent" >
              <div className="box box3">
                <div className="boxhead">
                  <div className="boxicon">
                  </div>
                  <div className="boxheading">Heading</div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere.</p>
                <button className="hiddenbtn">something</button>
              </div>
            </div>
            {/* another box */}
            <div className="boxparent" >
              <div className="box box4">
                <div className="boxhead">
                  <div className="boxicon">
                  </div>
                  <div className="boxheading">Heading</div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere.</p>
                <button className="hiddenbtn">something</button>
              </div>
            </div>
            {/* another box */}
            <div className="boxparent" >
              <div className="box box5">
                <div className="boxhead">
                  <div className="boxicon"></div>
                  <div className="boxheading">Heading</div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere.</p>
                <button className="hiddenbtn">something</button>
              </div>
              {/* finish box content */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section2