const React = require('react');
const ReactDom = require('react-dom');

const navigationBarStyle = {
    display: "flex",
    flexDirection: "row",
    height: "50px",
    padding: "0px 25px",
    lineHeight: "50px",
    fontSize: "x-large",
    fontFamily: "Calibri",
    color: "#FFFFFF",
    backgroundColor: "#333333",
    boxShadow: "0px 0px 20px #1A1A1A"
};

const navigationBarLeftStyle = {
    display: "flex",
    flex: "1 1 auto"
}

const navigationBarTitleLink = {
    textDecoration: "none",
    color: "#FFFFFF",
    fontWeight: "bold"
};

const navigationBarRightStyle = {
    display: "flex",
    flex: "0 1 auto"
}

const navigationBarLoginLink = {
    textDecoration: "none",
    color: "#FFFFFF"
};

class NavigationBar extends React.Component {
    createNavigationBar() {
        return (
            <div style={navigationBarStyle}>
                <div style={navigationBarLeftStyle}>                
                    <a href="#" style={navigationBarTitleLink}>Mental Health Community</a>
                </div>
                <div style={navigationBarRightStyle}>
                    <a href="#" style={navigationBarLoginLink}>Login</a>
                </div>
            </div>
        );
    }
    
    render() {
        return this.createNavigationBar();
    }
}

module.exports = NavigationBar;