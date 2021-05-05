import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
    state = { query: '' };

    handleChange = element => {
        this.setState({ query: element.currentTarget.value });
    };

    handleSubmit = element => {
        element.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    };

    render () {
        return (
            <header className={styles.Searchbar}>
                <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
                    <button type="submit" className={styles.SearchForm_button}>
                        <span className={styles.SearchForm_button_label}>Search</span>
                    </button>

                    <input
                        className={styles.SearchForm_input}
                        type="text"
                        value={this.state.query}
                        onChange ={this.handleChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;