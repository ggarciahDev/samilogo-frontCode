import React, { Component } from 'react';
import CommentCard from './commentCard';
import auth from './auth';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ListComments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: {}
    }
  }

  setComment = (e) => {
    auth.setComment(e.target.value);
  }

  sendComment() {
    axios.put("http://localhost:3000/api/products/" + auth.currentProductID, {
      review: {
        user: auth.user._id,
        comment: auth.comment
      }
    })
      .then(res => {
        console.log(res.data);
      })

    auth.resetComment();

    // PUT  localhost:puerto/api/products/:id
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/products/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(pro => {
        this.setState({ product: pro })
        console.log(this.state)
        console.log(pro)
      }
      )

  }



  render() {
    return (
      <div className="App">
        <segment className="BackColor">
          <segment className="BackColor">
            <h1>{this.state.product.title}</h1>
            <p>{this.state.product.description}</p>
          </segment>

          <CommentCard cUser={"5dd49bdf78d2210158f38369"} cComment={"Primer Comentario Producto 1"} />
          <CommentCard cUser={"5dce17c32e64e0410c97a659"} cComment={"Otro comentario"} />
          <CommentCard cUser={"5dd49bdf78d2210158f38369"} cComment={"Mi mensaje es muy importante brpw"} />
          <CommentCard cUser={"5dd49bdf78d2210158f38369"} cComment={"este es mi mensaje carajo}"} />
          <CommentCard cUser={"5dd49bdf78d2210158f38369"} cComment={"este es el p1"} />

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Escribe tu comentario</label>
            <textarea onChange={this.setComment} class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            <Button onClick={this.sendComment}>
              Comentar
                        </Button>
                        
          </div>
          <div class="form-group">
          <Link className="Font-Link" to={"/products"}>
                    <Button variant="primary">Go back</Button>
                </Link>
                        
          </div>
        </segment>
      </div>
    )
  }

}

export default ListComments
