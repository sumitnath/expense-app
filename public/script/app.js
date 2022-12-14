'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        // this.state = {options: props.options}
        _this.state = { options: [] };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    his.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                // do nothing at all
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
            console.log('save data');
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('component');
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            // this.setState(()=>{
            //    return {
            //        options : []
            //    } 
            // })
            //// short way to return the given above code
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var optio = this.state.options[randomNum];
            alert(optio);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return ' Enter Valid value';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'The option already exists';
            }

            //// short way to return the given above code
            //   this.setState((prevState)=>{
            //    return {options: prevState.options.concat(option)} 
            //   })
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Put your life in the hands of Computer';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, { hasOption: !this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOptions, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

// IndecisionApp.defaultProps = {options: []}

// class Header extends React.Component{
//     render(){
//         return (
//             <div>
//             <h1> {this.props.title }</h1>
//             <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }
// // converting class based components to stateless functional component


var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' ',
            props.title
        ),
        props.title && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};
// setting default value for header h1
Header.defaultProps = { title: 'Indecision App'

    // class Action extends React.Component{
    //       render(){
    //         return(
    //             <div>
    //             <button onClick={this.props.handlePick} 
    //             disabled={this.props.hasOption}>What Should I do?</button>
    //             </div>
    //         )
    //     }
    // }
    // // converting class based components to stateless functional component
};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handlePick,
                disabled: props.hasOption },
            'What Should I do?'
        )
    );
};
// // converting class based components to stateless functional component
// class Options extends React.Component{
//     render(){
//           return(
//         <div>
//         <button onClick={this.props.handleDeleteOptions}> Remove All Button</button>
//         <h2> Number of options avilable :- {this.props.options.length} </h2>
//         {
//               //this.props.options.map((opt)=> <li key={opt}> {opt}</li>)
//              this.props.options.map((opt) => <Option key={opt} optionText={opt} />)               
//         }    
//        <Option />
//         </div>
//         )
//     }    
// }
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
            null,
            ' Number of options avilable :- ',
            props.options.length,
            ' '
        ),
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            ' Remove All Button'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            ' Please add options to get started'
        ),

        //this.props.options.map((opt)=> <li key={opt}> {opt}</li>)
        props.options.map(function (opt) {
            return React.createElement(Option, {
                key: opt,
                optionText: opt,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};
// // converting class based components to stateless functional component
// class Option extends React.Component{
//     render(){
//      return(
//             <div>          
//              {this.props.optionText}    
//             </div>
//         )
//     }
// }
var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                } },
            'Remove'
        )
    );
};
// // converting class based components to stateless functional component


var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOptions, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            //// short way to return the given above code
            // this.setState(()=>{
            //     return {error: error}
            // })
            this.setState(function () {
                return { error: error };
            });
            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

// class IndecisionApp extends React.Component{
//     render(){
//         const title= 'Indecision';
//         const subtitle = 'Put your life in the hands of Computer'
//         const options = ['Thing One','Thing Two','Things four']


//     return(
//         <div>
//              <Header title={title} subtitle={subtitle} />
//              <Action />
//             <Options options={options} />
//             <AddOptions />         
//         </div>
//            )
// }
// }
// class Header extends React.Component{
//     render(){
//         return (
//             <div>
//             <h1> {this.props.title }</h1>
//             <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

// class Action extends React.Component{
//     handlePick(){
//         alert('Handle pick')
//     }
//     render(){
//         return(
//             <div>
//             <button onClick={this.handlePick}>What Should I do?</button>
//             </div>
//         )
//     }
// }
// class Options extends React.Component{
//   handleRemoveAll(){
// alert('Remove all option')
//  }
//     render(){

//         return(
//         <div>
//         <button onClick={this.handleRemoveAll}> Remove All Button</button>
//         <h2> No of options avilable :-{this.props.options.length} </h2>
//         <ol> 
//         {
//               //this.props.options.map((opt)=> <li key={opt}> {opt}</li>)
//              this.props.options.map((opt) => <Option key={opt} optionText={opt} />)               
//         }

//         </ol>
//         <Option />
//         </div>
//         )
//     }

// }

// class Option extends React.Component{
//     render(){

//         return(
//             <div> 
//              <li>
//              {this.props.optionText}
//              </li> 
//             </div>
//         )
//     }
// }
// class AddOptions extends React.Component{
//     handleAddOption(e){
//         e.preventDefault()
//         const option = e.target.elements.option.value.trim();
//         if(!option){
//   alert('Add op0tion first')
//         }
//         alert(e.target.elements.option.value)
//     }
//     render(){
//     return (
// <div>
// <form onSubmit={this.handleAddOption}>
// <input type="text" name="option">
// </input>
// <button>Add Option</button>
// </form>

// </div>
//     )
// }
// }


ReactDOM.render(React.createElement(IndecisionApp, { options: ['Devil De3n', 'God Paradise', 'Rumblling Stone'] }), document.getElementById('app'));
