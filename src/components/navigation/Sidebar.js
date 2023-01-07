import { connect } from "react-redux";

function Sidebar () {
    return(

<aside className="sidebar">
   <ul>
      <li>
         <a target="_blank" rel="noopener noreferrer" href="https://github.com/leandrocarriego/">
         </a>
      </li>
      <li>
         <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/leandrocarriego">
         </a>
      </li>
      <li>
         <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@zonayedpca">
         </a>
      </li>
      <li>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/zonayedpca"></a>
      </li>
   </ul>
</aside>
    )
};

const mapStateToProps = state =>({

});

export default connect(mapStateToProps, {

}) (Sidebar);