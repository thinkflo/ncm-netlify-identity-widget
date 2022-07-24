import { h, Component } from "preact";
import Message from "./message";
import Button from "./button";

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "", 
      email: "", 
      password: "", 
      phone_number: "", 
      dealer_code: "",
      representative_code: "",
      company_name: ""
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { page, message, saving, namePlaceholder, t } = this.props;
    const { 
      name, 
      email, 
      password, 
      phone_number, 
      dealer_code,
      representative_code,
      company_name      
    } = this.state;

    return (
      <form
        onsubmit={this.handleLogin}
        className={`form ${saving ? "disabled" : ""}`}
      >
        {message && <Message type={message} t={t} />}
        {page.name && (
          <div className="formGroup">
            <label>
              <span className="visuallyHidden">
                {t("form_name_placeholder")}
              </span>
              <input
                className="formControl"
                type="name"
                name="name"
                value={name}
                placeholder={
                  namePlaceholder ? namePlaceholder : t("form_name_label")
                }
                autocapitalize="off"
                required
                oninput={this.handleInput}
              />
              <div className="inputFieldIcon inputFieldName" />
            </label>
          </div>
        )}
        {(page.dealer_code || page.representative_code) && (
          <div className="formGroup twoColumns">
            {page.dealer_code && (
              <label>
                <span className="visuallyHidden">
                  {t("form_name_placeholder")}
                </span>
                <input
                  className="formControl"
                  type="name"
                  name="dealer_code"
                  value={dealer_code}
                  placeholder="Dealer Code"
                  autocapitalize="off"
                  required
                  oninput={this.handleInput}
                />
                <div className="inputFieldIcon inputFieldName" />
              </label>
            )}
            {page.representative_code && (
              <label>
                <span className="visuallyHidden">
                  {t("form_name_placeholder")}
                </span>
                <input
                  className="formControl"
                  type="name"
                  name="representative_code"
                  value={representative_code}
                  placeholder="Representative Code"
                  autocapitalize="off"
                  required
                  oninput={this.handleInput}
                />
                <div className="inputFieldIcon inputFieldName" />
              </label>
            )}
        </div>
        )}
        {(page.company_name || page.phone_number) && (
          <div className="formGroup twoColumns">
            {page.company_name && (
                <label>
                  <span className="visuallyHidden">
                    {t("form_name_placeholder")}
                  </span>
                  <input
                    className="formControl"
                    type="name"
                    name="company_name"
                    value={company_name}
                    placeholder="Company Name"
                    autocapitalize="off"
                    required
                    oninput={this.handleInput}
                  />
                  <div className="inputFieldIcon inputFieldName" />
                </label>
            )}
            {page.phone_number && (
                <label>
                  <span className="visuallyHidden">
                    {t("form_phone_number_placeholder")}
                  </span>
                  <input
                    className="formControl"
                    type="name"
                    name="phone_number"
                    value={phone_number}
                    placeholder="Phone number"
                    autocapitalize="off"
                    required
                    oninput={this.handleInput}
                  />
                  <div className="inputFieldIcon inputFieldName" />
                </label>
              )}
          </div>
        )}        
        {page.email && (
          <div className="formGroup">
            <label>
              <span className="visuallyHidden">{t("form_name_label")}</span>
              <input
                className="formControl"
                type="email"
                name="email"
                value={email}
                placeholder={t("form_email_placeholder")}
                autocapitalize="off"
                required
                oninput={this.handleInput}
              />
              <div className="inputFieldIcon inputFieldEmail" />
            </label>
          </div>
        )}
        {page.password && (
          <div className="formGroup">
            <label>
              <span className="visuallyHidden">{t("form_password_label")}</span>
              <input
                className="formControl"
                type="password"
                name="password"
                value={password}
                placeholder={t("form_password_placeholder")}
                autocomplete={page.password}
                required
                oninput={this.handleInput}
              />
              <div className="inputFieldIcon inputFieldPassword" />
            </label>
          </div>
        )}
        <Button
          saving={saving}
          text={t(page.button)}
          saving_text={t(page.button_saving)}
        />
      </form>
    );
  }
}
