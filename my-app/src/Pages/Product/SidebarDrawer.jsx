import styled from "styled-components";
import SidebarDrawer from "./SidebarDrawer";


export const Sidebar = () => {
 
  return (
    <DIV>
      <h3>Sort by Price</h3>
      <div >
        <input 
         type="radio"
          />
        <label>ASC</label>
        <br />
        <br />
        <input 
         type="radio"
         
         />
        <label>DESC</label>
        <br />
        <br />
        </div>


      <h3>Filter by Brand</h3>
      <div>
        <input 
         type="checkbox"
        
          />
        <label>Puma</label>
        <br />
        <br />
        <input type="checkbox"
        
         />
        <label>WROGN</label>
        <br />
        <br />
        <input type="checkbox"
        
       />
        <label>AUSK</label>
        <br />
        <br />
        <input type="checkbox" 
        
        />
        <label>Young trendz</label>
        <br />
        <br />
        <input type="checkbox" 
       
       />
        <label>LEE</label>
        <br />
        <br />
        <input type="checkbox" 
        
       />
        <label>LEVI'S</label>
      </div>
      <br />
      <br />
      <br />


      <h3>Filter by Color</h3>
      <div>
        <input 
         type="checkbox"
          />
        <label>Black</label>
        <br />
        <br />
        <input type="checkbox"
         />
        <label>blue</label>
        <br />
        <br />
        <input type="checkbox"
       />
        <label>yellow</label>
        <br />
        <br />
        <input type="checkbox" 
        />
        <label>white</label>
        <br />
        <br />
        <input type="checkbox" 
       />
        <label>Pink</label>
        <br />
      </div>
      <br />
      <br />
      <br />

      <SidebarDrawer/>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;
  color:white;
  label {
    margin-left: 5px;
  }
  input,
  label {
    font-size: larger;
  }
`;