/* eslint react/no-danger: 0 */
import React from 'react';
import { findDOMNode } from 'react-dom';
import TranslatedComponent from './TranslatedComponent';

/**
 * Help Modal
 */
export default class ModalHelp extends TranslatedComponent {

  static propTypes = {
    title: React.PropTypes.string
  };

  /**
   * Constructor
   * @param  {Object} props   React Component properties
   */
  constructor(props) {
    super(props);
  }

  /**
   * Focus on textarea and select all
   */
  componentDidMount() {
    const e = findDOMNode(this.refs.exportField);
    if (e) {
      e.focus();
      e.select();
    }
  }

  /**
   * Render the modal
   * @return {React.Component} Modal Content
   */
  render() {
    const translate = this.context.language.translate;
    const text = translate('HELP_TEXT');

    return <div className='modal' onClick={ (e) => e.stopPropagation() }>
      <h2>{translate(this.props.title || 'Help')}</h2>
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <button className='r dismiss cap' onClick={this.context.hideModal}>{translate('close')}</button>
    </div>;
  }
}
